import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
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

const sendIsForgotPasswordEmail = async () => {
    const pool = await mssql.connect(sqlConfig)
    const users:User[] = await(await pool.request().execute('SpSendIsForgotPasswordEmail')).recordset 
    
    for(let user of users){


        ejs.renderFile('templates/forgotPasswordEmail.ejs',{displayName:user.displayName}, async (error, html) => {
            
          const message = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "StackOverFlow Reset Password",
            html
          };
          //  console.log(html);
           
          // Generate a unique token
          const token = jwt.sign({ _id: user.userId }, process.env.RESET_PASSWORD_KEY as string, {
                    expiresIn: "15m",
          });  

          try {
            await sendMail(message)
            await pool.request()
            .input('UserId',user.userId)
            .execute(`spUpdateForgotPassword`)

             setTimeout(async () => {
                await pool.request()
                  .input("UserId", user.userId)
                  .execute(`spResetForgotPassword`);
              }, 900000); // 15 minutes
          
          } catch (error:any) {
            console.log(error.message);
            
          }
        
        })
        }
}  

export default sendIsForgotPasswordEmail
