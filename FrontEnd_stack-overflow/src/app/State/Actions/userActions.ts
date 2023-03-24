import { createAction, props } from "@ngrx/store";
import { LoginSuccess, LoginUser, Message,RegisteredUser,User,UpdateUserPayload  } from "src/app/Interfaces";



export const registerUser = createAction('[register] User Register',props<{userRegistered:User}>())

export const registerSuccess = createAction('[register ] User Register Success',props<{ message: string }>())

export const registerFailure = createAction('[register ] User Register Failure',props<{ error: string }>())


export const getUser = createAction('[users-admin] get Users  ')

export const getUserSuccess = createAction('[users-admin ] get Users successfull',props<{ users:RegisteredUser[] }>())

export const getUserFailure = createAction('[users-admin ] get Users Failure',props<{ error: string }>())



export const getLoggedInUsers = createAction('[login]-getLoggedInUsers')

export const loginUser = createAction('[login]-loginUser',props<{user:LoginUser}>())

export const loginSuccess = createAction('[login]-loginSuccessful',props<{res:LoginSuccess}>())

export const loginFail = createAction('[login]-loginFailed',props<{error:string}>())


// export const updateUser = createAction('[update-users] Update User',props<{displayName: string, isAdmin : string}>())

export const updateUserSuccess = createAction('[update-users] Update User Success',props<{ user: LoginSuccess }>())

export const updateUserFailure = createAction('[update-users] Update User Failure',props<{ error: string }>())

export const updateUser = createAction('[update-users] Update User',props<{userUpdated:UpdateUserPayload}>())


export const deleteUser = createAction('[Questions] Delete User',props<{ id: string }>())

export const deleteUserSuccess = createAction('[Questions] Delete User Success',props<{ id: string }>())

export const deleteUserFailure = createAction('[Questions] Delete User Failure',props<{ error: string }>())
