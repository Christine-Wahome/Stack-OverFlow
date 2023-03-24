import {  Request, Response } from 'express'
import mssql, { Transaction } from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config'
import { DatabaseHelper } from '../DatabaseHelper'
import {quesionsSchema} from '../Helpers'
import { QuestionPostType,RequestType } from '../Models' 

const helperDB = new DatabaseHelper()

interface ExtendedRequest extends Request{
    body:{ 
        questionId: string ,
        viewCount: string,
        title: string ,
        description: string ,
        userId: string , 
        tagId: string,
        answerId: string,
        tagName: string,
        isPreferredEmail:string,
        createdAtTime:string
        user?:RequestType
         }
}



export const questionPost = async (req: ExtendedRequest, res: Response) => {
    try {
      const questionId = uid()
    //   const tagId = uid()

    if(req.body.user){
          console.log(req.body.user);

      const { title, description, viewCount, answerId, tagName,tagId,isPreferredEmail,createdAtTime } = req.body
      const { error } = quesionsSchema.validate({ title, description, viewCount, answerId, tagName,tagId })
      if (error) {
        return res.status(400).json(error.details[0].message)
      }
  
      const pool = await mssql.connect(sqlConfig)
      const transaction = new Transaction(pool)
  
      await transaction.begin()
  
      try {
        const question = await (await (transaction.request()
          .input('questionId', questionId)
          .input('TagId', tagId)
          .input('ViewCount', viewCount)
          .input('Title', title)
          .input('Description', description)
          .input('UserId', req.body.user.userId)
          .input('AnswerId', answerId)
          .input('TagName', tagName)
          .input('IsPreferredEmail', isPreferredEmail)
          .input('CreatedAtTime', createdAtTime)

          .execute("spPostQuestionsAndTag"))).recordset
  
        await transaction.commit()
        console.log(question);
        
  
        res.status(200).json({ message: 'Question Successfully Posted' })
      } catch (error) {
        await transaction.rollback()
        throw error
      }
  
    } 
  
  }
  catch (error: any) {
    res.status(500).json(error.message)
  }


          
    
}    
export const getAllQuestions = async (req:Request, res:Response) => {
    try {
      const page = req.query.page ? parseInt(req.query.page.toString()) : 1
      const sizeOfPage = (req.query.sizeOfPage ? parseInt(req.query.sizeOfPage.toString()) :6)
      
      
      const skip = ((page - 1) * sizeOfPage).toString()
      const pageSize = sizeOfPage.toString()
  
      const totalCount: any = await (await helperDB.exec('SpGetQuestionsCount')).recordset[0]
      const totalQuestions = totalCount.questionCount
  
      const allQuestions = await (await helperDB.exec('SpGetAllQuestionsWithPagination', { skip, pageSize })).recordset
      res.status(200).json({
        totalCount: totalQuestions,
        currentPage: page,
        pageSize,
        totalPages: Math.ceil(totalQuestions / sizeOfPage),
        data: allQuestions
      })
    } catch (error:any) {
      res.status(500).json(error.message)
    }
  }
  
  

  export const getOneQuestion = async (req:Request, res:Response) => {
    const oneQuiz = req.params.questionId
    try {
      const OneQuestion = await (await helperDB.exec('SpGetSpecificQuestion', {QuestionId :oneQuiz})).recordset
      res.status(200).json(OneQuestion)
    } catch (error:any) {
      res.status(500).json(error.message)
    }
}  


  export const deleteAQuestion = async (req:Request, res:Response) => {
    const oneQuiz = req.params.questionId
    try {
      const OneQuestion = await (await helperDB.exec('spDeleteQuestion', {QuestionId :oneQuiz})).recordset
      res.status(200).json({ message: 'Question Deleted Successfully ' })
    } catch (error:any) {
      res.status(500).json(error.message)
    }
}  

  
  

