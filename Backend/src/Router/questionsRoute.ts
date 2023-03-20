import { Router } from "express";
import { getOneQuestion,getAllQuestions,deleteAQuestion } from "../Controller/questionsController"
import { verifyToken } from "../Middlewares/verifyToken"


const questionRouter = Router()

// questionRouter.post('/one/user/question/single',questionPost)

questionRouter.post('/deletequestion/:questionId',verifyToken,deleteAQuestion)

questionRouter.get('/onequestion/user/:questionId',verifyToken,getOneQuestion)
questionRouter.get('/allquestions',verifyToken,getAllQuestions)

export default questionRouter