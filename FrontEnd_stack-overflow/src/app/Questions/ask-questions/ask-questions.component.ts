import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from 'src/app/State/appState';
import { Store } from '@ngrx/store';
import { createQuestion } from 'src/app/State/Actions/question.action';
import { Question } from 'src/app/Interfaces';

@Component({
  selector: 'app-ask-questions',
  standalone: true,
  imports: [CommonModule,RouterModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './ask-questions.component.html',
  styleUrls: ['./ask-questions.component.css']
})
export class AskQuestionsComponent implements OnInit{
  questionForm!:FormGroup
  tagofId!:string
  date!:Date
  // question!: Question
  constructor(private fb:FormBuilder, private router:Router, private store:Store<AppState>){ }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tagName: ['',Validators.required]
    });
  }

  onSubmit() {
    const { title, description, tagName } = this.questionForm.value;
    this.tagofId = Math.floor(Math.random() * 1000000).toString();
    this.date = new Date()
    console.log(this.date);
    
  const question: Question = {
     
    title,
    description,
    tagId: this.tagofId,
    tagName,
    viewCount: 'null',
    answerId:"null",
    createdAtTime: new Date()
    
  }
  console.log(question);
  
  this.store.dispatch(createQuestion({ question }));
  }
}
