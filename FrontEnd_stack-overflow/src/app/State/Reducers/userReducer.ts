import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { LoginSuccess, RegisteredUser, User } from "src/app/Interfaces";
import * as userActions from "../Actions/userActions";

export interface UserInterface {
    registerSuccessMsg:string
    registerError:string
    users:LoginSuccess | null
    loginSuccess:LoginSuccess | null
    error:string,
    loginFail:string
    getUsers:RegisteredUser | null
    usersRegistered:RegisteredUser[]
   
    
}

const initialState: UserInterface= {
    registerSuccessMsg: '',
    registerError:'',
    users:null,
    loginSuccess:null,
    error:'',
    loginFail:'',
    getUsers:null,
    usersRegistered: [],
    

}

const UserSliceState= createFeatureSelector<UserInterface>('user')

export const registerSuccessMsg= createSelector(UserSliceState, state=>state.registerSuccessMsg)

export const registerError = createSelector(UserSliceState, state=> state.registerError)

export const loginFailure = createSelector(UserSliceState, state=> state.loginFail)

export const theLoggedInUsers= createSelector(UserSliceState, state=>state.users)

export const theRegisteredUsers= createSelector(UserSliceState, state=>state.usersRegistered)

export const userProfile= createSelector(UserSliceState, state=>state.loginSuccess)

export const updateUser= createSelector(UserSliceState, state=>state.loginSuccess)

export const allUsers = createSelector(UserSliceState, state => state.getUsers)

export const updateUserSelector = createSelector(
    UserSliceState,
    state => ({
      displayName: state.loginSuccess?.displayName || '',
      isAdmin: state.loginSuccess?.isAdmin || '',
    })
  );



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
    on(userActions.getUserSuccess, (state, action) => {
        return {
          ...state,
          usersRegistered:action.users
        };
      }),
      on(userActions.getUserFailure, (state, action) => {
        return {
          ...state,
          error: action.error,
        };
      }),
      on(userActions.deleteUser, (state, { id }) => {
        const updatedUsers = state.usersRegistered.filter(
          (user) => user.userId !== id
        );
        return {
          ...state,
          usersRegistered: updatedUsers,
        };
      }),
    // on(userActions.updateUser, (state, action): UserInterface => {
    //     const updatedUser = state.loginSuccess
    //       ? {
    //           ...state.loginSuccess,
    //           displayName: action.displayName,
    //           isAdmin: action.isAdmin,
    //         }
    //       : null;
    
    //     return {
    //       ...state,
    //       loginSuccess: updatedUser,
    //     };
    //   })
)