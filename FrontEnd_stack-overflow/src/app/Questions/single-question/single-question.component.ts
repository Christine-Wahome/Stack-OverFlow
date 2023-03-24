import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { ColorDirective } from 'src/app/Directives/color.directive';
import { Answer, Comment, QuestionData } from 'src/app/Interfaces';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { getQuestionById, addAnswer,loadAnswersSuccess, loadAnswers } from 'src/app/State/Actions/question.action';
import { getQuestionByIdSuccess } from 'src/app/State/Reducers/questionReducer';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addComment } from 'src/app/State/Actions/commentActions';
import { selectAllAnswers, selectAnswersForQuestion } from 'src/app/State/Reducers/answerReducer';

@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule,RouterModule,MatInputModule,ColorDirective,ReactiveFormsModule],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit{
  votes: number = 0;
  question!:QuestionData | null
  id!:number
  answerForm!:FormGroup
  answers!:Answer[] | null


  constructor(private route: ActivatedRoute, private fb:FormBuilder,private router:Router,
    private store: Store<AppState>){ }

    ngOnInit(): void {
      this.answerForm = this.fb.group({
        text:['',Validators.required],
        content:['']
      })


      this.route.params.subscribe((param:Params)=> {
        this.id = param['id']
        this.store.dispatch(getQuestionById({questionid:param['id']}))
        this.store.dispatch(loadAnswers({questionId:param['id']}))
      })

      this.store.select(getQuestionByIdSuccess).subscribe(response=>{
        if(response){
          this.question=response
        }
      })

      this.store.select(selectAllAnswers).subscribe(answers =>{
        this.answers = answers
        console.log(answers)
        
      })

      


    }

  addAnswer() {

    // const text = this.answerForm.value.text
    const {text, content}= this.answerForm.value
    const quizId = this.id.toString()
    const commentid =  Math.floor(Math.random() * 1000000).toString();
  
     const answer:Answer= {

      text,
      questionId: quizId,
      
      

    }
    console.log(answer);

    const comment:Comment= {
     
      commentId: commentid,
      content,
      questionId: quizId,
      text,

    }
    

    this.store.dispatch(addAnswer({ answer }));
    this.store.dispatch(addComment({ comment }))
  }

  upvote() {
    this.votes++;
  }

  downvote() {
    this.votes--;
  }



  
}
