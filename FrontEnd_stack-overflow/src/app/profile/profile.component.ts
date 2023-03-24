import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegisteredUser } from '../Interfaces';
import { getUser } from '../State/Actions/userActions';
import { theRegisteredUsers } from '../State/Reducers/userReducer';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users!:RegisteredUser[]
  constructor(private store : Store<{user:RegisteredUser}>){}
  

  ngOnInit(): void {
    // this.store.dispatch(getUser());
    // this.store.select(theRegisteredUsers).subscribe(res=>{
    //   this.users = res;
      
    // });
  }

}
