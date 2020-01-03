import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';

const routes : Routes = [
  {path : 'login', component : LoginComponent}
]


@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
   
  ]
})

export class LoginRoutingModule { }
