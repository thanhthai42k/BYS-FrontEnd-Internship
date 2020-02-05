import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  
  constructor( private service: StudentService, private router : Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private authService: AuthService ) { 
    this.formLogin = new FormGroup ({
      email : new FormControl(),
      password: new FormControl()
    })
    // this.authService.logout();
  }
 results;
  ngOnInit() {
    this.authService.logout();
  }

//   submit(){
//   console.log(this.service.arrUser, this.formLogin.value.email, this.formLogin.value.password);
//    const ischeckin = (this.service.arrUser || []).some(item => {
//     if (JSON.stringify({ userName: this.formLogin.value.email , password: this.formLogin.value.password })
//       === JSON.stringify(item)) {
//       localStorage.setItem('item', JSON.stringify(item)); 
//         alert("Đăng nhập thành công");
//         this.router.navigate(['/student/list']);
//         // this.formLogin.disable(); 
//         return true;  
//       }

//      else {
//       alert("Đăng nhập thất bại");
//       return false ;
//      }
//   }); 
// }
submitted = false;
loginError: string;
error: {};
submit() {
  this.submitted = true;
  this.authService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((data) => {
     if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/student/list';
        this.router.navigate([redirect]);
      } else {
        this.loginError = 'Email va password khong chinh xac';
      }
    },
    error => this.error = error
  );
}
}
