import { Injectable } from '@angular/core';
import { User, Message, LoginUser, LoginSuccess } from '../Interfaces';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  
  registerUser(user:User):Observable<Message>{
    console.log("user",user);
    
    return this.http.post<Message>('http://localhost:4000/register/user',user)
  }

  loginUser(user:LoginUser):Observable<LoginSuccess>{
    return this.http.post<LoginSuccess>('http://localhost:4000/login',user)
  }
}
