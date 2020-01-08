import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
// import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formreactive : FormGroup;
  // constructor(private fb: FormBuilder, private service: StudentService) { 
  //   this.formreactive = fb.group({
  //     newusername : ['',[Validators.required, Validators.minLength(6), Validators.email]] ,
  //     newpassword: ['',[Validators.required, Validators.minLength(6)]],  
  //   })
  // }

  ngOnInit() {
  }}
  
  // submit(){
  // // console.log(this.service.arrUser, this.formreactive.value.newusername, this.formreactive.value.newpassword);
  // const isCheckLogin = (this.service.arrUser || []).some(item => {
  //   if (JSON.stringify({ userName: this.formreactive.value.newusername , password: this.formreactive.value.newpassword })
  //     === JSON.stringify(item)) {
  //     alert("Đăng nhập thành công");
  //     return true;
  //   }
  //   return false;
  // })
  // if (!isCheckLogin) {
  //   alert("Đăng nhập thất bại");
  // }
  // }}
// function customvalid (formControl: FormControl) {
// if(formControl.value.includes('@gmail.com')){
//  return null;
// }
// else
// return true;
// }
