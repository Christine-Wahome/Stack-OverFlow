import { Router } from "express";
import { answerPost,getAnswersToQuestion } from "../Controller/answersController";
import { verifyToken } from "../Middlewares/verifyToken";


const answerRouter = Router()

answerRouter.post('/answer',verifyToken,answerPost)

answerRouter.get('/answerToQuestion/:questionId',verifyToken,getAnswersToQuestion)

export default answerRouter