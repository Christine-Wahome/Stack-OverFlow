import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { allUsers, theRegisteredUsers, userProfile } from 'src/app/State/Reducers/userReducer';
import { Store } from '@ngrx/store';
import { LoginUser, RegisteredUser } from 'src/app/Interfaces';
import { deleteUser, getUser } from 'src/app/State/Actions/userActions';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-users-admin',
  standalone: true,
  imports: [CommonModule,RouterModule,MatPaginatorModule,RouterLink],
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator
  pageSize = 6
  pageIndex = 0
  // user!:RegisteredUser
  
  
  users!:RegisteredUser[]

    
  constructor(private store : Store<{user:RegisteredUser}>){

  }

  ngOnInit(): void {
    this.store.dispatch(getUser());
    this.store.select(theRegisteredUsers).subscribe(res=>{
      this.users = res;
      this.updatePaginator();
    });
  }

  onPageChanged(event: any): void {
    this.pageIndex = event.pageIndex;
    this.updatePaginator();
  }

  updatePaginator(): void {
    if (this.paginator) {
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = this.pageIndex;
      this.paginator.length = this.users.length;
      this.paginator.firstPage();
    }
  }

  onDeleteUser(userId: string) {
    this.store.dispatch(deleteUser({ id:userId }));
  }
  

}

