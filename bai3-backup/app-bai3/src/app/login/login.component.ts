import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StudentService } from '../student.service';
import { Observable, from } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  router: any;
  constructor( private service: StudentService, router : Router, private activatedRoute: ActivatedRoute) { 
    this.formLogin = new FormGroup ({
      email : new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }
  
  submit(){
  console.log(this.service.arrUser, this.formLogin.value.email, this.formLogin.value.password);
  const isCheckLogin = (this.service.arrUser || []).some(item => {
    if (JSON.stringify({ userName: this.formLogin.value.email , password: this.formLogin.value.password })
      === JSON.stringify(item)) {
      alert("Đăng nhập thành công");
      localStorage.setItem('testObject', JSON.stringify({a: 1, b:2}));
      // this.router.navigate(['/student/list']);
      return true;
    }
    return false;
  })
  if (!isCheckLogin) {
    alert("Đăng nhập thất bại");
  }
  }
}
