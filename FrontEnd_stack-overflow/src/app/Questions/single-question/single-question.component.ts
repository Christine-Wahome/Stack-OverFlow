import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { ColorDirective } from 'src/app/Directives/color.directive';
import { Question, QuestionData } from 'src/app/Interfaces';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { getQuestionById, loadQuestions } from 'src/app/State/Actions/question.action';
import { getQuestionByIdSuccess } from 'src/app/State/Reducers/questionReducer';

@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule,RouterModule,MatInputModule,ColorDirective],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit{
  votes: number = 0;
  question!:QuestionData | null
  id!:number


  constructor(private route: ActivatedRoute,private router:Router,
    private store: Store<AppState>){ }

    ngOnInit(): void {
      this.route.params.subscribe((param:Params)=> {
        this.id = param['id']
        this.store.dispatch(getQuestionById({questionid:param['id']}))
      })

      this.store.select(getQuestionByIdSuccess).subscribe(response=>{
        if(response){
          this.question=response
        }
      })

    }

  upvote() {
     this.votes++
    // return this.votes;
  }



  
}
