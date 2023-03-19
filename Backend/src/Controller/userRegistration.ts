import { RequestHandler, Request, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config'
import { UserRegistrationType } from '../Models'
import { DatabaseHelper } from '../DatabaseHelper'
import {registration} from '../Helpers'

const helperDB = new DatabaseHelper()


export const getUsers:RequestHandler = async(req,res) =>{
      
      try {
        const pool = await mssql.connect(sqlConfig)
        const registration:UserRegistrationType[] = await (await (pool.request().execute("SpGetUsers"))).recordset
        res.status(200).json(registration)
      } catch (error:any) {
        res.status(500).json(error.message)
      }

}


interface ExtendedRequest extends Request{
  body:{ userId:string , displayName:string , email:string , password:string, pictureUrl:string,
    isSent:string}
}
export const addUsers = async(req:ExtendedRequest,res:Response) => {
       
  try {
    const{displayName, email,password,pictureUrl,isSent}= req.body
      
    const{error}=registration.validate({displayName,email, password})
    if (error){
      return res.status(400).json(error.details[0].message)
    }
       const IdUser = uid()
       const pool = await mssql.connect(sqlConfig)
       await pool.request()
       .input('IdUser',IdUser)
       .input('DisplayName',displayName)
       .input('Email',email)
       .input('Password',password)
       .input('PictureUrl',pictureUrl)
       .input('IsSent',isSent)

       .execute('spRegisterUser')
       res.status(200).json({message:'User Registered'})
  } catch (error: any) {
    res.status(500).json(error.message)
  }
       
       
       
}