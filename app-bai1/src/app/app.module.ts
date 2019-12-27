import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyserviceService} from './myservice.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Loginc2Component } from './loginc2/loginc2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Loginc2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
