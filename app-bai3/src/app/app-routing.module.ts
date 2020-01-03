import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
