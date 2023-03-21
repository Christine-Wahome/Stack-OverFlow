import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Question,Comment, Answer, QuestionData } from '../Interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions !: Question[] 
    
    
    
    constructor(private http:HttpClient) { }
    
    getQuestions(): Observable<QuestionData> {
    // return new Observable(observer => {

    //   observer.next(this.questions)
    // });
    return this.http.get<QuestionData>('http://localhost:4000/post/question/allquestions')
    
    
    }
    

    addQuestion(question: Question): Observable<Question> {
    
      // return new Observable(observer => {
      //   const newQuestion: Question = {
      //       ...question,
            
      //     };
      //     this.questions.push(newQuestion);
      //     console.log(this.questions);
      //   observer.next(newQuestion)
      // });

      return this.http.post<Question>('http://localhost:4000/post/to/stack/overflow/one/user/question/single',question)
    }
    
    
    getQuestionById(questionId: string): Observable<QuestionData> {
    
    return this.http.post<QuestionData>('http://localhost:4000/post/question/onequestion/user/${questionId}',questionId)
     
    }

    // this.getQuestionById(questionId).subscribe(question => {
  //   if (question) {
  //     const key = comment.user.toLowerCase();
  //     if (!question.comments[key]) {
  //       question.comments[key] = [];
  //     }
  //     question.comments[key].push(comment);
  //   }
    
  // addCommentToQuestion(questionId: string, comment: Comment): Observable<Question> {
  //   return new Observable(observer => {
  //     this.getQuestionById(questionId).subscribe(question => {
  //       if (question) {
  //         const key = comment.user.toLowerCase();
  //         if (!question.comments[key]) {
  //           question.comments[key] = [];
  //         }
  //         question.comments[key].push(comment);
  //         observer.next(question);
  //       }
  //       observer.complete();
  //     }, error => {
  //       observer.error(error);
  //     });
  //   });
  // }
  
    
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
