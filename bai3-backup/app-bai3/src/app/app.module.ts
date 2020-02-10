import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentService} from './student.service';
import {StudenetModule} from './student/student.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';

// import {StudentService} from './student.service';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudenetModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [StudentService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
