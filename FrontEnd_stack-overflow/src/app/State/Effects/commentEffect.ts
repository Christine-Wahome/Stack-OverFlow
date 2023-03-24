import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { QuestionsService } from 'src/app/Services/questions.service';
import { addComment, addCommentFailure, addCommentSuccess } from '../Actions/commentActions';

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions, private commentService: QuestionsService) {}


addComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addComment),
      mergeMap((action) => {
        
        return this.commentService.addCommentToAnswer( action.comment).pipe(
          map((commentPosted) => addCommentSuccess({ comment: commentPosted })),
          catchError((error) => of(addCommentFailure({ error })))
        )
      })
    )
  });
}
