import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Question } from 'src/app/Interfaces'

import * as QuestionActions from '../Actions/question.action';

export interface QuestionState {
  questions: Question[] 
  questionId:string
}

export const initialState: QuestionState = {
  questions: [],
  questionId: ''
};


const QuestionsSliceState= createFeatureSelector<QuestionState>('questions') 

export const addQuestionSuccess = createSelector (QuestionsSliceState, state => state.questions )
export const createQuestionSuccess = createSelector (QuestionsSliceState, state => state.questions )
const singleQuestionId = createSelector(QuestionsSliceState, state=>state.questionId)

export const getQuestionByIdSuccess = createSelector(addQuestionSuccess,singleQuestionId, (state,id)=>{
    return state.find(x=>x.id===id)
}
  );
  


export const questionReducer = createReducer(
  initialState,

  on(QuestionActions.loadQuestionsSuccess, (state, { questions }) => ({
    
    ...state,
    questions,
  })),

  on(QuestionActions.createQuestionSuccess, (state, action) => ({
    ...state,
    questions: [...state.questions, action.question],
  })),

  on(QuestionActions.updateQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: state.questions.map((q) => (q.id === question.id ? question : q)),
  })),

  on(QuestionActions.deleteQuestionSuccess, (state, { id }) => ({
    ...state,
    questions: state.questions.filter((q) => q.id !== id),
  })),
  on(QuestionActions.getQuestionById, (state, actions) => ({
    ...state,
    questionId:actions.id,
  }))
  
  
  

)
