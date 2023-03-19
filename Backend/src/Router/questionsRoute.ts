import { Router } from "express";
import { questionPost,getOneQuestion,getAllQuestions,deleteAQuestion } from "../Controller/questionsController";
import { verifyToken } from "../Middlewares/verifyToken";


const questionRouter = Router()

// questionRouter.post('/one/user/question/single',questionPost)

questionRouter.post('/deletequestion/:questionId',deleteAQuestion)

questionRouter.get('/onequestion/user/:questionId',getOneQuestion)
questionRouter.get('/allquestions',getAllQuestions)

export default questionRouter