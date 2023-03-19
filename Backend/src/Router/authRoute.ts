import { Router } from "express";
import { registerUser, login, getAllUsers,getOneUser,deleteAUser  } from "../Controller/authController";


const authRouter = Router()

authRouter.post('/register/user',registerUser)
authRouter.post('/login',login )

authRouter.post('/deleteuser/:userId',deleteAUser )

authRouter.get('/getusers',getAllUsers )
authRouter.get('/getoneuser/:userId',getOneUser )

export default authRouter