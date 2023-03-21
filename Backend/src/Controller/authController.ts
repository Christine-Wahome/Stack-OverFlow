import {  Request, Response } from 'express'
import mssql from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config'
import {registration, loginSchema} from '../Helpers'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserRegistrationType } from '../Models' 
import { DatabaseHelper } from '../DatabaseHelper'

const helperDB = new DatabaseHelper()

interface ExtendedRequest extends Request{
    body:{ userId:string , displayName:string , email:string , password:string, pictureUrl:string,
        isSent:string,isAdmin:string,isForgotPassword:string}
}

export  const registerUser = async (req:Request, res:Response) => {
    
    try {
       
        
       const userId = uid()
       const pool = await mssql.connect(sqlConfig)
       const{displayName, email,password,pictureUrl,isSent,isAdmin,isForgotPassword}= req.body
       console.log(req.body);
       
       
       //encypting a password
       const encryptPassword = await bycrypt.hash(password,10)
       console.log(encryptPassword);
       
       const{error}=registration.validate({displayName,email, password})
    if (error){
      return res.status(400).json(error.details[0].message)
    } 

       await pool.request()
       .input('userId',userId)
       .input('DisplayName',displayName)
       .input('Email',email)
       .input('Password',encryptPassword)
       .input('PictureUrl',pictureUrl)
       .input('IsSent',isSent)
       .input('IsAdmin',isAdmin)
       .input('IsForgotPassword',isForgotPassword)
       .execute('spRegisterUser')
       res.status(200).json({message:'User Registered'})


    } catch (error:any) {
        res.status(500).json(error.message)
    }
}



export const login = async (req:ExtendedRequest, res:Response) => {
    try {
        const{email,password}= req.body  
        const{error}=loginSchema.validate({email,password})
        if (error){
          return res.status(400).json(error.details[0].message)}

        //check if the email exists   
        const pool = await mssql.connect(sqlConfig)
        const user:UserRegistrationType[] = await (await (pool.request().input('Email',email).execute("SpLoginUser"))).recordset
        
        if(!user[0]){
            return res.status(404).json('user not found')
        }
        
        
        // password check
        const validPassword = await bycrypt.compare(password, user[0].password)
        if(!validPassword){
            return res.status(404).json('user where') 
        }
        
        // Authorization and Authentication
        const payload = user.map(property =>{
            //omit the password
            const{password,...rest} = property
            return rest
        })

        console.log(payload[0]);
        
        const token = jwt.sign(payload[0], process.env.SECRETKEY as string, {expiresIn:'3600000s'})
        console.log(token);
        
        return res.status(200).json({ message:'user logged in', token})
    } catch (error:any) {
        res.status(500).json(error.message)
    }
}

export const getAllUsers = async (req:Request, res:Response) => {
    try {
        const registeredUsers = await(await helperDB.exec('SpGetUsers')).recordset
        res.status(200).json(registeredUsers)
        
    } catch (error:any) {
        res.status(500).json(error.message)
        
    }

}

export const getOneUser = async (req:Request, res:Response) => {
    const oneUser = req.params.userId
    try {
      const theUser = await (await helperDB.exec('SpGetSpecificUser', {UserId :oneUser})).recordset
      res.status(200).json(theUser)
    } catch (error:any) {
      res.status(500).json(error.message)
    }
}    


export const deleteAUser = async (req:Request, res:Response) => {
    const oneUser = req.params.userId
    try {
      const theUser = await (await helperDB.exec('spDeleteUserById', {UserId :oneUser})).recordset
      res.status(200).json({message: 'User Successfully Deleted'})
    } catch (error:any) {
      res.status(500).json(error.message)
    }
}    