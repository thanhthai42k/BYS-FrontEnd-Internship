import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
newUser = '';
newPassword = '';
  constructor(
    private myservice : MyserviceService
  ) { }

  ngOnInit() {
  }

// submit() {
//   console.log(this.myservice.arrUser, this.newUser, this.newPassword);
//   const isCheckLogin = (this.myservice.arrUser || []).some(item => {
//     if (JSON.stringify({userName: this.newUser, password:this.newPassword})
//       === JSON.stringify(item)) {
//         alert("Đăng nhập thành công");
//         return true;
//       }
//     return false;
//   })
//   if (!isCheckLogin) {
//     alert("Đăng nhập thất bại");
//   }
// }
submit(formDangNhap) {
  console.log(this.myservice.arrUser, this.newUser, this.newPassword);
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
