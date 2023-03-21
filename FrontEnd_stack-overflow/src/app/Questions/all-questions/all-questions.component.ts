import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { QuestionData } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { addQuestionSuccess, getQuestionSuccess } from 'src/app/State/Reducers/questionReducer';
import { ColorDirective } from 'src/app/Directives/color.directive';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [CommonModule,RouterModule,ColorDirective,RouterLink],
  
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
questions!:QuestionData | null


  ngOnInit(): void {
    this.store.select(getQuestionSuccess).subscribe(questions => {
      console.log(questions);
      this.questions = questions
      
      
    });
    
  }

constructor( private store:Store<AppState>) { }

}
