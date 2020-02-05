import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import {Router } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor (private router: Router, private authService: AuthService ) {}
  //  checkLogin(url: string) {
  //   if (this.authService.isLoggedIn()) {
  //     return true;
  //   }

  //   this.authService.redirectUrl = url;

  //   this.router.navigate(['/login'], {queryParams: { returnUrl: url }} );
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (localStorage.getItem('item')){
      //   return true;
      // }
      // else {
      //   this.router.navigate(['/login'])
      //   return false;
      // }
      // const url: string = state.url;
      // return this.checkLogin(url);
      if (localStorage.getItem('currentUser')){
        return true;
      }
      else {
        this.router.navigate(['/student.list'])
      }
  }
 

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
