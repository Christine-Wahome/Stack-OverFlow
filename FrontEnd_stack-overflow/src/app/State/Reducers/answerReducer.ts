import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Answer } from 'src/app/Interfaces';
import * as QuestionActions from '../Actions/question.action';


export interface AnswerState {
    answers: Answer[];
    questionId:string
  }
  
  export const initialAnswerState: AnswerState = {
    answers: [],
    questionId:''
  }

  export const selectAnswerState = createFeatureSelector<AnswerState>('answers')
  const singleQuestionId = createSelector(selectAnswerState, state=>state.questionId)
  
  export const selectAllAnswers = createSelector(
    selectAnswerState,
    (state: AnswerState) => state.answers
  );

  
  export const selectAnswersForQuestion = createSelector(
    selectAllAnswers,
    singleQuestionId,
    (answers: Answer[], questionId: string) => {
      if (answers && questionId) {
        console.log(answers);
        
        return answers
      }
      return null;
    }
  );
  
  
//   export const selectAnswersForQuestion = createSelector(
//     selectAllAnswers,
//     (_:any, questionId: string) => questionId,
//     (answers: Answer[], questionId: string) =>
//       answers.filter(a => a.questionId === questionId)
//   );

  export const answerReducer = createReducer(
    initialAnswerState,
    on(QuestionActions.addAnswerSuccess, (state, { answer }) =>({
        ...state, 
        answer

    })
    ),
    on(QuestionActions.loadAnswersSuccess, (state, actions) => ({
        ...state,
        answers:actions.answers,
      }))
  
  );