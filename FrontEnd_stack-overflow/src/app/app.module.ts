import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './State/Reducers/userReducer';
import { UsersEffect } from './State/Effects/userEffects';
import { isDevMode } from '@angular/core';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { QuestionEffects } from './State/Effects/questionEffects';
import { questionReducer } from './State/Reducers/questionReducer';
import { AnswerEffects } from './State/Effects/answerEffects';
import { CommentEffects } from './State/Effects/commentEffect';
import { answerReducer } from './State/Reducers/answerReducer';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
    StoreModule.forRoot({ user:userReducer, questions:questionReducer, answers:answerReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UsersEffect, QuestionEffects,AnswerEffects,CommentEffects]),
  ],
  //providers:[],
   providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
