import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-loginc2',
  templateUrl: './loginc2.component.html',
  styleUrls: ['./loginc2.component.css']
})
export class Loginc2Component implements OnInit {
  newUser = '';
  newPassword = '';
  constructor(private myservice : MyserviceService) { }

  ngOnInit() {
  }
  submit(formDangNhap) {
    // console.log(this.myservice.arrUser, this.newUser, this.newPassword);
    const isCheckLogin = (this.myservice.arrUser || []).some(item => {
      if (JSON.stringify({userName: this.newUser, password:this.newPassword})
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
