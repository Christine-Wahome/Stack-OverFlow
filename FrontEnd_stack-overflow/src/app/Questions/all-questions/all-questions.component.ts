import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { QuestionData } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { addQuestionSuccess, getQuestionSuccess } from 'src/app/State/Reducers/questionReducer';
import { ColorDirective } from 'src/app/Directives/color.directive';
import { NewestPipe } from 'src/app/Pipes/newest.pipe';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [CommonModule,RouterModule,ColorDirective,RouterLink,NewestPipe],
  
  
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
questions!:QuestionData | null |undefined
currentPage: number | undefined= 1;
pageSize: number = 10;
totalPages: number | undefined = 0;
createdAtTime!:Date



  ngOnInit(): void {
    this.store.select(getQuestionSuccess).subscribe(questions => {
      console.log(questions);
      this.questions = questions
      if (questions) {
        this.pageSize = parseInt(questions.pageSize);
        this.currentPage = questions.currentPage;
        this.totalPages = questions.totalPages;
        
      }
      
      
      
      
      
    });
    
  }

constructor( private store:Store<AppState>) { }

goToPage(page: number) {
  this.currentPage = page;
}

getPages(): number[] {
  const pages: number[] = [];
  if (!this.totalPages) return pages;

  for (let i = 1; i <= this.totalPages!; i++) {
    if (i === 1 || i === this.totalPages! || (i >= this.currentPage! - 2 && i <= this.currentPage! + 2)) {
      pages.push(i);
    }
  }
  return pages;
}

sortNewest() {
  if (this.questions){
    this.questions.data.sort((a, b) => {
      let dateA = new Date(a.createdAtTime);
      let dateB = new Date(b.createdAtTime);
      return dateB.getTime() - dateA.getTime();
    });

  }
  
}




     

}
