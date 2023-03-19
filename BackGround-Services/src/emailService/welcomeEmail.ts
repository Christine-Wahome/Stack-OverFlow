import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import ejs from 'ejs'
import sendMail from '../helpers'
import mssql from 'mssql'
import { sqlConfig } from '../config'
dotenv.config({ path: path.resolve(__dirname, '../.env') })


interface User{
    userId:string 
    displayName:string  
    email:string 
    password:string 
    pictureUrl:string
    isSent:string
    isForgotPassword:string
  }
const sendWelcomeEmail = async () => {
  const pool = await mssql.connect(sqlConfig)
  const users:User[] = await(await pool.request().execute('SpSendWelcomeEmails')).recordset
  // console.log(users);
  for(let user of users){


    ejs.renderFile('templates/registration.ejs',{displayName:user.displayName}, async (error, html) => {
        
        //message configuration
      const message = {
        from: process.env.EMAIL,
        to: user.email,
        subject: "Welcome to StackOverFlow",
        html
      };
      //  console.log(html);
       
        //sending email
      try {
        await sendMail(message)
        await pool.request()
        .input('UserId',user.userId)
        .execute(`SpUpdateUserSentEmail`)
      } catch (error:any) {
        console.log(error.message);
        
      }
    
    })
    }
}



export default sendWelcomeEmail
