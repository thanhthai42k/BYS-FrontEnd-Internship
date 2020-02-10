import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {Routes, RouterModule} from '@angular/router'
import {User} from './user';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
const routes : Routes = [
  {path: 'user/detail' , component: UserDetailComponent,

},
  {path: 'user/edit' , component: UserEditComponent}
]
@NgModule({
  declarations: [UserDetailComponent, UserEditComponent, UserFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ÚserModule { }
