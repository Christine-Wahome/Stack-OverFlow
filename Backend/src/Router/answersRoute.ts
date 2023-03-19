import { Router } from "express";
import { answerPost,getAnswersToQuestion } from "../Controller/answersController";
import { verifyToken } from "../Middlewares/verifyToken";


const answerRouter = Router()

answerRouter.post('/answer',answerPost)

answerRouter.get('/answerToQuestion/:questionId',getAnswersToQuestion)

export default answerRouter