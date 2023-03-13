import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { LoginSuccess, User } from "src/app/Interfaces";
import * as userActions from "../Actions/userActions";

export interface UserInterface {
    registerSuccessMsg:string
    registerError:string
    users:LoginSuccess | null
    loginSuccess:LoginSuccess | null
    error:string,
    loginFail:string
}

const initialState: UserInterface= {
    registerSuccessMsg: '',
    registerError:'',
    users:null,
    loginSuccess:null,
    error:'',
    loginFail:''

}

const UserSliceState= createFeatureSelector<UserInterface>('user')

export const registerSuccessMsg= createSelector(UserSliceState, state=>state.registerSuccessMsg)

export const registerError = createSelector(UserSliceState, state=> state.registerError)

export const loginFailure = createSelector(UserSliceState, state=> state.loginFail)

export const theLoggedInUsers= createSelector(UserSliceState, state=>state.users)

export const userProfile= createSelector(UserSliceState, state=>state.loginSuccess)



export const userReducer = createReducer<UserInterface>  (
    initialState,
    on(userActions.registerSuccess, (state,action):UserInterface => {
        return {
            ...state,
            registerSuccessMsg:action.message,
        }
    }),
    on(userActions.registerFailure, (state,action) => {
        return {
            ...state,
            registerError: action.error,
        }
    }),
    on (userActions.loginSuccess, (state,action):UserInterface =>{
        return {
            ...state,
            users:action.res,
            loginSuccess:action.res
        }
    }),
    on (userActions.loginFail, (state,action):UserInterface =>{
        return {
            ...state,
            error:action.error
        }
    }),
    on(userActions.updateUser, (state, action): UserInterface => {
        const updatedUser = state.loginSuccess
          ? {
              ...state.loginSuccess,
              name: action.Name,
              role: action.role,
            }
          : null;
    
        return {
          ...state,
          loginSuccess: updatedUser,
        };
      })
)