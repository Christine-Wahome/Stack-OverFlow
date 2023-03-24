import {  Request, Response } from 'express'
import mssql, { Transaction } from 'mssql'
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config'
import { DatabaseHelper } from '../DatabaseHelper'
import { answersSchema } from '../Helpers'
import { AnswerPostType, RequestType } from '../Models'

const helperDB = new DatabaseHelper()

interface ExtendedRequest extends Request{
    body:{ 
         content:string,
        userId:string ,
        answerId:string,
        commentId:string,
        voteId:string ,
        questionId:string,
        text:string,
        voteCount:string,
        isPreferred:string,
        isPreferredEmail:string,
        voteType:boolean,
        user?:RequestType 
         }
}

export const answerPost = async (req: ExtendedRequest, res: Response) => {
    try {
      const answerId = uid()
    //   const tagId = uid()
      console.log(req.body);
      
    if(req.body.user){
      const { content, commentId,voteId ,questionId,text, voteCount,isPreferred,isPreferredEmail,voteType} = req.body
      const { error } = answersSchema.validate({  questionId,text })
      if (error) {
        return res.status(400).json(error.details[0].message)
      }
  
      const pool = await mssql.connect(sqlConfig)
      const transaction = new Transaction(pool)
  
      await transaction.begin()
  
      try {
        const question: AnswerPostType[] = await (await (transaction.request()
          .input('answerId', answerId)
          .input('Content', content)
          .input('UserId', req.body.user.userId)
          .input('CommentId', commentId)
          .input('VoteId', voteId)
          .input('QuestionId', questionId)
          .input('Text', text)
          .input('VoteCount', voteCount)
          .input('IsPreferred', isPreferred)
          .input('IsPreferredEmail', isPreferredEmail)
          .input('VoteType', voteType)

          .execute("spPostAnswersAndCommentsWithVotes"))).recordset
  
        await transaction.commit()
        console.log(question);
        
  
        res.status(200).json({ message: 'Answer Successfully Posted' })
      } catch (error) {
        await transaction.rollback()
        throw error
      }

    }
      
  
    } catch (error: any) {
      res.status(500).json(error.message)
    }
  }

  export const getAnswersToQuestion = async (req:Request, res:Response) => {
    const oneQuiz = req.params.questionId
    try {
      const OneQuestion = await (await helperDB.exec('SpGetAnswersToQuestion', {QuestionId :oneQuiz})).recordset
      res.status(200).json(OneQuestion)
    } catch (error:any) {
      res.status(500).json(error.message)
    }
  }
  
