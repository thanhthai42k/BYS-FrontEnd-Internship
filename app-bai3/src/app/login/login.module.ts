import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';





@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports : [RouterModule]
})
export class LoginModule { }
