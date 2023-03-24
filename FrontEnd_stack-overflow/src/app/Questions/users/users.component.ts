import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RegisteredUser } from 'src/app/Interfaces';
import { getUser } from 'src/app/State/Actions/userActions';
import { theRegisteredUsers } from 'src/app/State/Reducers/userReducer';
import { Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
 
    @ViewChild(MatPaginator) paginator!: MatPaginator
    pageSize = 4
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
    
  
  }
  
  

