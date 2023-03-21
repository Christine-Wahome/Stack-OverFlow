import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Question, QuestionData } from 'src/app/Interfaces'

import * as QuestionActions from '../Actions/question.action';

export interface QuestionState {
  questions: Question[] 
  questionId:string
  questionData: QuestionData | null
}

export const initialState: QuestionState = {
  questions: [],
  questionId: '',
  questionData: null
};


const QuestionsSliceState= createFeatureSelector<QuestionState>('questions') 

export const addQuestionSuccess = createSelector (QuestionsSliceState, state => state.questions )
export const getQuestionSuccess = createSelector (QuestionsSliceState, state => state.questionData )
export const createQuestionSuccess = createSelector (QuestionsSliceState, state => state.questions )
const singleQuestionId = createSelector(QuestionsSliceState, state=>state.questionId)

// export const getQuestionByIdSuccess = createSelector(
//   getQuestionSuccess,
//   singleQuestionId,
//   (state, questionId) => {
//     if (state) {
//       const question = state.data.find((x) => x.questionId === questionId);
//     return question ? question : undefined;
//     }
//     return null;
//   }
// );
export const getQuestionByIdSuccess = createSelector(
  getQuestionSuccess,
  singleQuestionId,
  (state, questionId) => {
    if (state) {
      const question = state.data.find((x) => x.questionId === questionId);
      if (question) {
        // Create a new QuestionData object from the selected Question object
        const questionData: QuestionData = {
          totalCount: 0,
          currentPage: 1,
          pageSize: "1",
          totalPages: 1,
          data: [question]
        };
        return questionData;
      }
    }
    return null;
  }
);



export const questionReducer = createReducer(
  initialState,

  on(QuestionActions.loadQuestionsSuccess, (state, action) => ({
    
    ...state,
    questionData: action.questionsLoad,
  })),

  on(QuestionActions.createQuestionSuccess, (state, action) => ({
    ...state,
    questions: [...state.questions, action.question],
  })),

  on(QuestionActions.updateQuestionSuccess, (state, { question }) => ({
    ...state,
    questions: state.questions.map((q) => (q.questionId === question.questionId ? question : q)),
  })),

  on(QuestionActions.deleteQuestionSuccess, (state, { id }) => ({
    ...state,
    questions: state.questions.filter((q) => q.questionId !== id),
  })),
  on(QuestionActions.getQuestionById, (state, actions) => ({
    ...state,
    questionId:actions.questionid,
  }))
  
  
  

)
