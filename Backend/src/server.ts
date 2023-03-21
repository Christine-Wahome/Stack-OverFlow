
import express, { json }  from "express"
import answerRouter from "./Router/answersRoute"
import authRouter from "./Router/authRoute"
import questionRouter from "./Router/questionsRoute"
import bodyParser from "body-parser"
import questionpostRouter from "./Router/postQuestionRoute"
import cors from 'cors'
const app = express()

app.use(cors())
//registering some middlewares
// app.use(json()) //adds a body to the request
app.use (bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/', authRouter)
app.use('/post/question', questionRouter)
app.use('/post/to/stack/overflow/', questionpostRouter)
app.use('/onquestion/posts/user', answerRouter)


const port =process.env.PORT || 4000



app.listen(port,()=>{
    console.log("server running")
})