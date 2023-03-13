
import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/Interfaces';

export const addComment = createAction('[Comment] Add Comment', props<{ questionId: string, comment: Comment }>());
export const addCommentSuccess = createAction('[Comment] Add Comment Success', props<{ comment: Comment[] }>());
export const addCommentFailure = createAction('[Comment] Add Comment Failure', props<{ error: any }>());
