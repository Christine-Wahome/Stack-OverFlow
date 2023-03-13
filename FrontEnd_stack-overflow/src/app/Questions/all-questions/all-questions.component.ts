import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Question } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { addQuestionSuccess } from 'src/app/State/Reducers/questionReducer';
import { ColorDirective } from 'src/app/Directives/color.directive';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [CommonModule,RouterModule,ColorDirective,RouterLink],
  
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
questions!:Question[]


  ngOnInit(): void {
    this.store.select(addQuestionSuccess).subscribe(questions => {
      console.log(questions);
      this.questions = questions
      
      
    });
    
  }

constructor( private store:Store<AppState>) { }

// ngOnInit(): void {
  
//   const questions: Question[] = [
//     {
//       id: 1,
//       text: 'How do i center a div in css?',
//       date: new Date(),
//       user: 'John',
//       comments: {},
//       answers: [],
//     },
//     {
//       id: 2,
//       text: 'How can i add pagination?',
//       date: new Date(),
//       user: 'Chris',
//       comments: {},
//       answers: [],
//     },
//   ];
//   this.store.dispatch(loadQuestionsSuccess({ questions }));

//   // Subscribe to the state and update the component's questions property
//   this.store.select(addQuestionSuccess).subscribe(state => {
//     console.log('current state:', state);
//     this.questions = state;
//     console.log('questions:', this.questions);
//   });
// }




}
