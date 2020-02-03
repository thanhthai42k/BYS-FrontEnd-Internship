
// import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { StudentService } from './student.service';


// export class Guards implements CanActivate, CanActivateChild {
//     constructor(
//         private service: StudentService,
//         private router: Router
//     ) {}

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//         return this.service.arrUser.authenticated().map((status) => {
//             if (status) {
//                 return true;
//             }
//             this.router.navigate(["/student/list"]);

//             return false;
//         });
//     }

//     canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//         return this.canActivate(route, state);
//     }
// }

// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// // import localStorage from 'localStorage';

// @Injectable()
// export class Guards {
//   private loggedIn = false;

//   constructor(private http: Http) {
//     this.loggedIn = !!localStorage.getItem('testObject');
//   }

//   login(email, password) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     return this.http
//       .post(
//         '/login', 
//         JSON.stringify({ email, password }), 
//         { headers }
//       )
//       .map(res => res.json())
//       .map((res) => {
//         if (res.success) {
//           localStorage.setItem('testObject', res.auth_token);
//           this.loggedIn = true;
//         }

//         return res.success;
//       });
//   }
  
//   logout() {
//     localStorage.removeItem('testObject');
//     this.loggedIn = false;
//   }

//   isLoggedIn() {
//     return this.loggedIn;
//   }
// }

// constructor(private userService: UserService, private router: Router) {}

//   onSubmit(email, password) {
//     this.userService.login(email, password).subscribe((result) => {
//       if (result) {
//         this.router.navigate(['Home']);
//       }
//     });