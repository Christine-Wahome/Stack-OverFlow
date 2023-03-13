import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/State/Actions/userActions';
import { theLoggedInUsers } from 'src/app/State/Reducers/userReducer';
import { AppState } from 'src/app/State/appState';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  submitted=false;
 
  constructor(private formBuilder:FormBuilder,private router:Router, private store:Store<AppState>){ }

  ngOnInit(){
    
    this.loginForm = this.formBuilder.group({
      
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
      
      
      
    });
  }

  onSubmit(){
    this.submitted = true;
    localStorage.clear()
    this.store.dispatch(loginUser({user:this.loginForm.value}))
      this.router.navigate([''])
    
      this.store.select(theLoggedInUsers).subscribe(res => {
        if(res){
          localStorage.setItem('token',res.token)
        }
       
      })
  }

}
