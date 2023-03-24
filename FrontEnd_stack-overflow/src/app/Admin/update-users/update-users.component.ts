import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoginSuccess, LoginUser, RegisteredUser, UpdateUserPayload } from 'src/app/Interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { loginUser,updateUser, updateUserSuccess } from 'src/app/State/Actions/userActions';
import { theRegisteredUsers, updateUserSelector } from 'src/app/State/Reducers/userReducer';

@Component({
  selector: 'app-update-users',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit{

  user!:UpdateUserPayload[]
  displayName!: string
  isAdmin!:string
  updateUserForm!: FormGroup
  constructor(private store : Store<{user:LoginUser}>,private fb : FormBuilder,private router:Router){}
    
    ngOnInit(): void {
      this.updateUserForm = this.fb.group({
        displayName: new FormControl('',[Validators.required]),
        isAdmin : new FormControl('',[Validators.required]),
      })
  
      // this.store.select(updateUser).subscribe(res=>{
      //   console.log(res);
      //   this.user = res
        
        
  
      //   this.updateUserForm.patchValue({
      //     displayName: this.user,
      //     isAdmin: this.user
          
      //   })
        
      // })
    }
  
    onSubmit(){
    
      // this.store.dispatch(updateUserSelector({displayName:this.updateUserForm.value.name,isAdmin:this.updateUserForm.value.role}))
      this.router.navigate(['users-admin'])
  
    }
  }


