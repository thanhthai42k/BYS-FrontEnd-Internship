import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
formreactive: FormGroup;
  constructor(private service : MyserviceService, private fb: FormBuilder) {
    this.formreactive = fb.group({
      newusername : ['',[Validators.required, customvalid, Validators.minLength(6), Validators.email]] ,
      newpassword: ['',[Validators.required, Validators.minLength(6)]],  
    })
   }
  ngOnInit() {
  }
  submit() {
    // console.log(this.service.arrUser, this.formreactive.value.newusername, this.formreactive.value.newpassword);
    const isCheckLogin = (this.service.arrUser || []).some(item => {
      if (JSON.stringify({ userName: this.formreactive.value.newusername , password: this.formreactive.value.newpassword })
        === JSON.stringify(item)) {
        alert("Đăng nhập thành công");
        return true;
      }
      return false;
    })
    if (!isCheckLogin) {
      alert("Đăng nhập thất bại");
    }
}
}
function customvalid (formControl: FormControl) {
 if(formControl.value.includes('@gmail.com')){
   return null;
 }
 else
return true;
}
