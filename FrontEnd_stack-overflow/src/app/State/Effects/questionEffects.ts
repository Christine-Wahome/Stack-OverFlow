import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { QuestionsService } from 'src/app/Services/questions.service'
import * as QuestionActions from '../Actions/question.action'


@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private questionsService: QuestionsService
  ) {}

  loadQuestions = createEffect(() =>{
  return this.actions$.pipe(
    ofType(QuestionActions.loadQuestions),
    mergeMap(() =>{
      return this.questionsService.getQuestions().pipe(
        map((questions) =>
          QuestionActions.loadQuestionsSuccess({ questions })
        ),
        catchError((error) =>
          of(QuestionActions.loadQuestionsFailure({ error }))
        )
      )
      })
  )
})
  


createQuestion$ = createEffect(() =>{
  return this.actions$.pipe(
    ofType(QuestionActions.createQuestion),
    mergeMap((action) =>{
      return this.questionsService.addQuestion(action.question).pipe(
        map((createdQuestion) =>
          QuestionActions.createQuestionSuccess({ question: createdQuestion})
        ),
        catchError((error) =>
          of(QuestionActions.createQuestionFailure({ error }))
        )
      )
    }
    )
  )
}
);

// updateQuestion$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(QuestionActions.updateQuestion),
//     mergeMap(({ question }) =>
//       this.questionsService.updateQuestion(question).pipe(
//         map((updatedQuestion) =>
//           QuestionActions.updateQuestionSuccess({ question: updatedQuestion })
//         ),
//         catchError((error) =>
//           of(QuestionActions.updateQuestionFailure({ error }))
//         )
//       )
//     )
//   )
// );

// deleteQuestion$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(QuestionActions.deleteQuestion),
//     mergeMap(({ id }) =>
//       this.questionsService.deleteQuestion(id).pipe(
//         map(() => QuestionActions.deleteQuestionSuccess({ id })),
//         catchError((error) =>
//           of(QuestionActions.deleteQuestionFailure({ error }))
//         )
//       )
//     )
//   )
// );





}
