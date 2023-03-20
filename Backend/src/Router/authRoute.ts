import { Router } from "express";
import { registerUser, login, getAllUsers,getOneUser,deleteAUser  } from "../Controller/authController";
import { verifyToken } from "../Middlewares/verifyToken";


const authRouter = Router()

authRouter.post('/register/user',registerUser)
authRouter.post('/login',login )

authRouter.post('/deleteuser/:userId',verifyToken,deleteAUser )

authRouter.get('/getusers',verifyToken,getAllUsers )
authRouter.get('/getoneuser/:userId',verifyToken,getOneUser )

export default authRouter