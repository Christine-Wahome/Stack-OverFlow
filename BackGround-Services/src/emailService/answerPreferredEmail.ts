
import dotenv from 'dotenv'
import path from 'path'
import ejs from 'ejs'
import sendMail from '../helpers'
import mssql from 'mssql'
import { sqlConfig } from '../config'
dotenv.config({ path: path.resolve(__dirname, '../.env') })


interface Answer{
    name: string
    email: string
    answerId: string
    isPreferredEmail: string 
  }
const sendAnsIsPreferredEmail = async () => {
  const pool = await mssql.connect(sqlConfig)
  const answers:Answer[] = await(await pool.request().execute('SpSendIsPreferredEmail')).recordset
  // console.log(users);
  for(let answer of answers){


    ejs.renderFile('templates/preferredAnsEmail.ejs',{displayName:answer.name}, async (error, html) => {
        
        //message configuration
      const message = {
        from: process.env.EMAIL,
        to: answer.email,
        subject: "Your Answer Is Preferred!!",
        html
      };
       console.log(html);
       
        //sending email
      try {
        await sendMail(message)
        await pool.request()
        .input('AnswerId',answer.answerId)
        .execute(`SpUpdateIsPrefferedAnsEmail`)
      } catch (error:any) {
        console.log(error.message);
        
      }
    
    })
    }
}



export default sendAnsIsPreferredEmail