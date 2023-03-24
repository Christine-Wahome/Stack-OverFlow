import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './State/appState';
// import * as QuestionsActions from './State/Actions/question.action'
import { loadQuestions } from './State/Actions/question.action';
import { getUser } from './State/Actions/userActions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stack-overflow';

  ngOnInit():void {
    this.store.dispatch(loadQuestions())
    // this.store.dispatch(getUser());

  }

  constructor(private store:Store<AppState>) { }
}
