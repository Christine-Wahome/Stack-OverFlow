import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { loginUser } from 'src/app/State/Actions/userActions';
import { theLoggedInUsers } from 'src/app/State/Reducers/userReducer';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
   
  changePasswordForm!:FormGroup;
  submitted=false;
 
  constructor(private formBuilder:FormBuilder,private router:Router, private store:Store<AppState>){ }

  ngOnInit(){
    
    this.changePasswordForm = this.formBuilder.group({
      
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
      conPassword:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ], [this.confirmPass.bind(this)]],
      
      
      
    });
  }

  onSubmit(){
    this.submitted = true;
    localStorage.clear()
    this.store.dispatch(loginUser({user:this.changePasswordForm.value}))
      this.router.navigate([''])
    
      this.store.select(theLoggedInUsers).subscribe(res => {
        if(res){
          localStorage.setItem('token',res.token)
        }
       
      })
  }

  confirmPass(control:AbstractControl):Promise<{[s:string]:boolean} |null>{
  
   const prom = new Promise<{[s:string]:boolean} |null>((resolve,reject)=>{
    if(control.value !==this.changePasswordForm.value.password){
      resolve( {passwordUnmatch:true})
  }else{
    resolve (null)
  }
      
   })

   return prom;
  }

}
