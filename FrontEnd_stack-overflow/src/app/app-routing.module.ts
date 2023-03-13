import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:()=>import('./home/home.component').then(c=>c.HomeComponent)},
  {path:'login', loadComponent:()=>import('./Auth/login/login.component').then(c=>c.LoginComponent)},
  {path:'signup', loadComponent:()=>import('./Auth/signup/signup.component').then(c=>c.SignupComponent)},
  {path:'allquiz', loadComponent:()=>import('./Questions/all-questions/all-questions.component').then(c=>c.AllQuestionsComponent)},
  {path:'onequiz/:id', loadComponent:()=>import('./Questions/single-question/single-question.component').then(c=>c.SingleQuestionComponent)},
  {path:'askquiz', loadComponent:()=>import('./Questions/ask-questions/ask-questions.component').then(c=>c.AskQuestionsComponent)},
  {path:'tags', loadComponent:()=>import('./Questions/tags/tags.component').then(c=>c.TagsComponent)},
  {path:'users', loadComponent:()=>import('./Questions/users/users.component').then(c=>c.UsersComponent)},
  {path:'profile', loadComponent:()=>import('./profile/profile.component').then(c=>c.ProfileComponent)},
  {path:'admin', loadComponent:()=>import('./Admin/dashboard/dashboard.component').then(c=>c.DashboardComponent),
    children: [
      {path:'users-admin', loadComponent:()=>import('./Admin/users-admin/users-admin.component').then(c=>c.UsersAdminComponent)},
      {path:'userUpdate', loadComponent:()=>import('./Admin/update-users/update-users.component').then(c=>c.UpdateUsersComponent)},
      {path:'posts', loadComponent:()=>import('./Admin/posts/posts.component').then(c=>c.PostsComponent)},

    ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
