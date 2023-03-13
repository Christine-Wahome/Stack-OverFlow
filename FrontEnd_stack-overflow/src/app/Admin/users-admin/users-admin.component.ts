import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userProfile } from 'src/app/State/Reducers/userReducer';
import { Store } from '@ngrx/store';
import { LoginUser } from 'src/app/Interfaces';

@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit{

  user!:LoginUser
  name!: string
  role!:string

    
  constructor(private store : Store<{user:LoginUser}>){

  }

  ngOnInit(): void {
    this.store.select(userProfile).subscribe(res=>{
      console.log(res);
      

      if(res){
        this.role = res.role
        this.name = res.name
      }
      
    })
  }

}
