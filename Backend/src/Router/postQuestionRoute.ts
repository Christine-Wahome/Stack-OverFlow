import { Router } from "express";
import { questionPost } from "../Controller/questionsController";
import { verifyToken } from "../Middlewares/verifyToken";

const questionpostRouter = Router()

questionpostRouter.post('/one/user/question/single',questionPost)



export default questionpostRouter