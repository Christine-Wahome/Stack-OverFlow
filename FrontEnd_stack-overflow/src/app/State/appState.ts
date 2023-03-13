import { CommentState } from "./Reducers/commentReducer";
import { QuestionState } from "./Reducers/questionReducer";
import { UserInterface } from "./Reducers/userReducer";

export interface AppState{
    
    user:UserInterface
    questions:QuestionState
    comment: CommentState
}