import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'student' , loadChildren: () => import('./student/student.module').then(i => i.StudenetModule)
},
]
@NgModule({
  imports: [
    // LoginModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
