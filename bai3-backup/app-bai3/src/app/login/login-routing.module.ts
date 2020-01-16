import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {StudentService} from '../student.service';

const routes : Routes = [
  {path : '', component : LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
   
  ],
  providers: [StudentService]  

})

export class LoginRoutingModule { }
