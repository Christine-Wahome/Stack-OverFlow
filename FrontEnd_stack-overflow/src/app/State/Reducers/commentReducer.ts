import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { Comment } from 'src/app/Interfaces';
import { addComment,addCommentSuccess,addCommentFailure } from '../Actions/commentActions';


export interface CommentState {
    comments: Comment[];
    loading: boolean;
    error: any;
  }

  export const initialCommentState: CommentState = {
    comments: [],
    loading: false,
    error: null,
  };

  export const selectCommentState = createFeatureSelector<CommentState>('comment');

  export const selectComments = createSelector (selectCommentState,state => state.comments);
  export const selectLoading = createSelector (selectCommentState,state => state.loading);
  export const selectError = createSelector (selectCommentState,state => state.error);

  
  export const commentReducer = createReducer(
    initialCommentState,
  on(addComment, (state) => ({ ...state, loading: true })),
  on(addCommentSuccess, (state, { comment }) => ({
    ...state,
    comments: {...state.comments, comment},
    loading: false,
  })),
  )