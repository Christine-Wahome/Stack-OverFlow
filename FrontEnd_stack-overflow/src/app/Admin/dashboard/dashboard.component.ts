import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { LoginSuccess, LoginUser } from 'src/app/Interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user!: LoginSuccess
  constructor(private store:Store<AppState>){ }
   
  ngOnInit(): void {
    // this.store.select('user').subscribe(state=>{
    //   // console.log(state);
    //   this.user = state.users !== null ? state.users : 
    // })
  }

}
