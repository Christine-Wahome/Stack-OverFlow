import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionData } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { getQuestionSuccess } from 'src/app/State/Reducers/questionReducer';
import { deleteQuestion } from 'src/app/State/Actions/question.action';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
questions!:QuestionData | null

constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getQuestionSuccess).subscribe(questions => {
      console.log(questions);
      this.questions = questions
      
      
    });
  }

  deleteQuestionById(questionId: string): void {
    this.store.dispatch(deleteQuestion({ id: questionId }));
  }

}
