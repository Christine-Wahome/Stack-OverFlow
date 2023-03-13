import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './State/appState';
// import * as QuestionsActions from './State/Actions/question.action'
import { loadQuestions } from './State/Actions/question.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stack-overflow';

  ngOnInit():void {
    this.store.dispatch(loadQuestions ())

  }

  constructor(private store:Store<AppState>) { }
}
