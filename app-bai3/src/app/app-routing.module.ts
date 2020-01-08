import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
// import { LoginModule } from './login/login.module';

const routes : Routes = [
  // {path : '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '' , loadChildren: () => import('./student/student.module').then(i => i.StudenetModule)
 
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
