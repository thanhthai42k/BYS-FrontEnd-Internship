import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {StudentService} from '../student.service';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../auth.guard';
// import {LogoutComponent} from './logout/logout.component';



const routes : Routes = [
  {path : '', component : LoginComponent},
  // {path : 'login/logout', component : LogoutComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
   
  ],
  declarations:[
    // LoginComponent
  ],
  providers: [StudentService]  

})

export class LoginRoutingModule { }
