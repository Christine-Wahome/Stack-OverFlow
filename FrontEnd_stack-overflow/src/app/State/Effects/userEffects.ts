import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/Services/user.service";
import * as userActions from '../Actions/userActions'

@Injectable ()

export class UsersEffect {
    constructor (private userService:UserService, private actions$:Actions ) { }

    register = createEffect(() => {
        return this.actions$.pipe(
          ofType(userActions.registerUser),
          concatMap((action) => {
            return this.userService.registerUser(action.userRegistered).pipe(
              map((successResponse) => {
                return userActions.registerSuccess({ message: 'successfully Registered' });
              }),
              catchError((error) =>
                of(userActions.registerFailure({ error: error.message }))
              )
            );

          })
        );
      });

      loginAdd = createEffect(() => {
        return this.actions$.pipe(
          ofType(userActions.loginUser),
          concatMap((action) => { 
            return this.userService.loginUser(action.user).pipe(
              map((successResponse) => {
                return userActions.loginSuccess({ res: successResponse });
              }),
              catchError((error) =>
                of(userActions.loginFail({ error: error.message }))
              )
            );
          })
        );
      });
}