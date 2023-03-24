import { AnswerState } from "./Reducers/answerReducer";
import { CommentState } from "./Reducers/commentReducer";
import { QuestionState } from "./Reducers/questionReducer";
import { UserInterface } from "./Reducers/userReducer";

export interface AppState{
    
    user:UserInterface
    questions:QuestionState
    answers: AnswerState
    comment: CommentState
}