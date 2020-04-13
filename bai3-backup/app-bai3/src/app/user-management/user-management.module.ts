import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../user.service';
const routes : Routes = [
  {path: 'usergroup/list' , component: UserListComponent}
]

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers : [UserService]
})
export class UserManagementModule { }
