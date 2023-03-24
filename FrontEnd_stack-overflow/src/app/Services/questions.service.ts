import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Question,Comment, Answer, QuestionData } from '../Interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

    constructor(private http:HttpClient) { }
    
    getQuestions(): Observable<QuestionData> {

    return this.http.get<QuestionData>('http://localhost:4000/post/question/allquestions')
    
    }
    

    addQuestion(question: Question): Observable<Question> {
    
      return this.http.post<Question>('http://localhost:4000/post/to/stack/overflow/one/user/question/single',question)
    }
    
    
    getQuestionById(questionId: string): Observable<QuestionData> {
    
    return this.http.post<QuestionData>('http://localhost:4000/post/question/onequestion/user/${questionId}',questionId)
     
    }


    addAnswerToQuestion( answer: Answer): Observable<Answer> {
      const endpoint = 'http://localhost:4000/onquestion/posts/user/answer';
      console.log("We get to the Service");
      
      return this.http.post<Answer>(endpoint, answer)
    }

    
    
  addCommentToAnswer( comment: Comment): Observable<Comment> {
    const endpoint = 'http://localhost:4000/onquestion/posts/user/answer';
      console.log("We get to the Service");
      
      return this.http.post<Comment>(endpoint, comment)
  }

  getAnswersToQuestion(questionId: string): Observable<Answer[]> {
    
    return this.http.get<Answer[]>(`http://localhost:4000/onquestion/posts/user/answerToQuestion/${questionId}`)
     
    }


    deleteQuestion(questionId: string): Observable<Question> {
      return this.http.delete<Question>(`http://localhost:4000/post/question/deletequestion/${questionId}`)

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
