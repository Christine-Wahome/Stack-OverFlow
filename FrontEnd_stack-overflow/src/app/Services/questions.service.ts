import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Question,Comment, Answer } from '../Interfaces';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
    id: "1",
    title: "What is Angular?",
    description: "A javascript framework",
    tag: "javascript",
    date: new Date(),
    user: "Alice",
    comments: {},
    answers: [
    { id: "1", text: "Angular is a framework for building web applications", date: new Date(), user: "Bob", votes: 0 }
    ]
    },
    {
    id: "2",
    title: "What is Angular?",
    description: "A javascript framework",
    tag: "javascript",
    date: new Date(),
    user: "Bob",
    comments: {},
    answers: []
    }
    ];
    
    
    
    constructor() { }
    
    getQuestions(): Observable<Question[]> {
    return new Observable(observer => {

      observer.next(this.questions)
    });
    }
    

    addQuestion(question: Question): Observable<Question> {
    
      return new Observable(observer => {
        const newQuestion: Question = {
            ...question,
            
          };
          this.questions.push(newQuestion);
          console.log(this.questions);
        observer.next(newQuestion)
      });
    }
    
    
    getQuestionById(id: string): Observable<Question | undefined> {
     return new Observable(observer => {
       const question = this.questions.find(question => question.id === id);
       observer.next(question)
     });

    }

    // this.getQuestionById(questionId).subscribe(question => {
  //   if (question) {
  //     const key = comment.user.toLowerCase();
  //     if (!question.comments[key]) {
  //       question.comments[key] = [];
  //     }
  //     question.comments[key].push(comment);
  //   }
    
  addCommentToQuestion(questionId: string, comment: Comment): Observable<Question> {
    return new Observable(observer => {
      this.getQuestionById(questionId).subscribe(question => {
        if (question) {
          const key = comment.user.toLowerCase();
          if (!question.comments[key]) {
            question.comments[key] = [];
          }
          question.comments[key].push(comment);
          observer.next(question);
        }
        observer.complete();
      }, error => {
        observer.error(error);
      });
    });
  }
  
    
//   getCommentsForQuestion(questionId: string): Observable<{ [key: string]: Comment[] } | undefined> {
//     return this.getQuestionById(questionId).pipe(
//         map((question) => {
//             if (question) {
//                 return question.comments;
//             }
//             return undefined;
//         })
//     );
// }
  
    
// addAnswerToQuestion(questionId: string, answer: Answer): void {
//   this.getQuestionById(questionId).subscribe(question => {
//     if (question) {
//       question.answers.push(answer);
//     }
//   });
// }

    
// upvoteAnswer(questionId: string, answerId: string): void {
//   this.getQuestionById(questionId).subscribe(question => {
//       if (question) {
//           const answer = question.answers.find(answer => answer.id === answerId);
//           if (answer) {
//               answer.votes++;
//           }
//       }
//   });
// }

    
// downvoteAnswer(questionId: string, answerId: string): void {
//   this.getQuestionById(questionId).subscribe(question => {
//     if (question) {
//       const answer = question.answers.find(answer => answer.id === answerId);
//       if (answer && answer.votes > 0) {
//         answer.votes--;
//       }
//     }
//   });
// }

}
