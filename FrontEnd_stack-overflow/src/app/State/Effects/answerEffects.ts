import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, tap,mergeMap } from 'rxjs/operators'
import * as QuestionActions from '../Actions/question.action'
import { QuestionsService } from 'src/app/Services/questions.service'


@Injectable()

export class AnswerEffects {
    constructor(
        private actions$: Actions,
        private questionsService: QuestionsService
      ) {}


      addAnswerToQuestionEffect = createEffect(() =>{
        return this.actions$.pipe(
          ofType(QuestionActions.addAnswer),
          tap(res=> console.log(res)),
          mergeMap((action) =>{
            return this.questionsService.addAnswerToQuestion( action.answer).
            
            pipe(
             tap(res=> console.log(res)),
              map((createdAnswer) => QuestionActions.addAnswerSuccess({ answer:createdAnswer })),
              catchError((error) => of(QuestionActions.addAnswerFailure({ error })))
            )
          }
          )
        )
       })

       loadAnswers = createEffect(() => {
        return this.actions$.pipe(
          ofType(QuestionActions.loadAnswers),
          mergeMap((action) => {
            return this.questionsService.getAnswersToQuestion(action.questionId).pipe(
              map((loadedAnswers) => {
                return QuestionActions.loadAnswersSuccess({
                    answers:loadedAnswers
                });
              }),
              catchError((error) => of(QuestionActions.loadAnswersFailure({ error })))
            );
          })
        );
      });
      
      


}


  
        