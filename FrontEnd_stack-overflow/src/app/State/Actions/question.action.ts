import { createAction, props } from '@ngrx/store'
import { Answer, Question,QuestionData } from 'src/app/Interfaces'


export const loadQuestions = createAction('[Questions] Load Questions')

export const loadQuestionsSuccess = createAction('[Questions] Load Questions Success',props<{ questionsLoad: QuestionData }>())

export const loadQuestionsFailure = createAction('[Questions] Load Questions Failure',props<{ error: string }>())



export const createQuestion = createAction('[Questions] Create Question',props<{ question: Question }>())

export const createQuestionSuccess = createAction('[Questions] Create Question Success',props<{ question: Question }>())

export const createQuestionFailure = createAction('[Questions] Create Question Failure',props<{ error: string }>())

export const getQuestionById = createAction('[Question] Get Question By Id',props<{ questionid: string }>());



export const updateQuestion = createAction('[Questions] Update Question',props<{ question: Question }>())

export const updateQuestionSuccess = createAction('[Questions] Update Question Success',props<{ question: Question }>())

export const updateQuestionFailure = createAction('[Questions] Update Question Failure',props<{ error: string }>())



export const deleteQuestion = createAction('[Questions] Delete Question',props<{ id: string }>())

export const deleteQuestionSuccess = createAction('[Questions] Delete Question Success',props<{ id: string }>())

export const deleteQuestionFailure = createAction('[Questions] Delete Question Failure',props<{ error: string }>())



export const addAnswer = createAction('[Questions] Add Answer',props<{ answer: Answer }>())

export const addAnswerSuccess = createAction('[Questions] Add Answer Success',props<{ answer: Answer }>())

export const addAnswerFailure = createAction('[Questions] Add Answer Failure',props<{ error: string }>())



export const loadAnswers = createAction('[Answer] Load Answers',props<{questionId: string }>())

export const loadAnswersSuccess = createAction('[Answer] Load Answers Success',props<{ answers: Answer[]}>() )
  
export const loadAnswersFailure = createAction('[Questions] Load Questions Failure',props<{ error: string }>())



export const voteAnswer = createAction('[Questions] Vote Answer',props<{ answerId: string, vote: number }>())

export const voteAnswerSuccess = createAction('[Questions] Vote Answer Success',props<{ answerId: number, vote: number }>())

export const voteAnswerFailure = createAction('[Questions] Vote Answer Failure',props<{ error: string }>())
