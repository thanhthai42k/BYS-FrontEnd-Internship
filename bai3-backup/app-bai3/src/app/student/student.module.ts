import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {StudentService} from '../student.service';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// const routes : Routes = [
//   {path: 'student' , component: StudentListComponent,
//   children:  [ 
//               { path: 'create' , component : StudentCreateComponent},
//               { path: 'list' , component : StudentListComponent},
//               { path: 'edit' , component : StudentEditComponent},
//               { path: 'form' , component : StudentFormComponent},
//               { path: 'detail' , component : StudentDetailComponent}
// ]

// }]
// const routes : Routes = [
//   { path: 'list' , component : StudentListComponent,
//   children: [
//     { path: 'create' , component : StudentCreateComponent},
//     { path: 'edit' , component : StudentEditComponent},
//     { path: 'form' , component : StudentFormComponent},
//     { path: 'detail' , component : StudentDetailComponent}
//   ]
// }
// ]
const routes : Routes = [
              // { path: 'student' , redirectTo: '/list', pathMatch: 'full'},
              { path: 'student/create' , component : StudentCreateComponent},
              { path: 'student/list' , component : StudentListComponent},
              { path: 'student/edit/:mssv' , component : StudentEditComponent},
              { path: 'student/form' , component : StudentFormComponent},
              { path: 'student/detail/:mssv' , component : StudentDetailComponent}
]
@NgModule({

  declarations: [StudentListComponent, StudentDetailComponent, StudentEditComponent, StudentCreateComponent, StudentFormComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [StudentService]
})
export class StudenetModule { }
