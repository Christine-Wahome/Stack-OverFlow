import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerUser } from 'src/app/State/Actions/userActions';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false;
  passwordUnmatch = false;
  
  
  
  
  constructor(private formBuilder:FormBuilder,private router:Router,private store:Store<any>){
    
  }

  ngOnInit(){
    
    this.registerForm = this.formBuilder.group({
      
      Name:['',[Validators.required,Validators.minLength(4)]],
      
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ]],
      // conPassword:['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')  ], [this.confirmPass.bind(this)]],
      
      
      
    })


  }
 

  onSubmit(){
     this.submitted = true
     
     this.store.dispatch(registerUser({userRegistered:  this.registerForm.value}))
      console.log(this.registerForm.value);
      
      this.router.navigate(['login'])
     // console.log(this.registerForm);
  }
    
    
  


  // confirmPass(control:AbstractControl):Promise<{[s:string]:boolean} |null>{
  
  //  const prom = new Promise<{[s:string]:boolean} |null>((resolve,reject)=>{
  //   if(control.value !==this.registerForm.value.password){
  //     resolve( {passwordUnmatch:true})
  // }else{
  //   resolve (null)
  // }
      
  //  })

  //  return prom;
  // }

}

