import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoginUser } from 'src/app/Interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { loginUser,updateUser } from 'src/app/State/Actions/userActions';

@Component({
  selector: 'app-update-users',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit{

  user!:LoginUser
  name!: any | null
  role!:any | null
  updateUserForm!: FormGroup
  constructor(private store : Store<{user:LoginUser}>,private fb : FormBuilder,private router:Router){}
    
    ngOnInit(): void {
      this.updateUserForm = this.fb.group({
        name: new FormControl('',[Validators.required]),
        role : new FormControl('',[Validators.required]),
      })
  
      this.store.select(loginUser).subscribe(res=>{
        console.log(res);
        
        this.user=res.user
        
  
        this.updateUserForm.patchValue({
          name: this.user.users.name,
          role: this.user.users.role
          
        })
        
      })
    }
  
    onSubmit(){
    
      this.store.dispatch(updateUser({Name:this.updateUserForm.value.name,role:this.updateUserForm.value.role}))
      this.router.navigate(['users-admin'])
  
    }
  }
 

