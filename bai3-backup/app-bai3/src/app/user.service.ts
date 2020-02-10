import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError, tap, startWith} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from './úser/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
repos;
customersObservable : Observable<User[]>;
  constructor(private http: HttpClient) { }
//  userUrl = 'http://jsonplaceholder.typicode.com/users';

  //  getData() {
  //   return this.http.get<any>(`${this.userUrl}`)
  //   .pipe(map(user => {
  //       if (user.result.id) {
  //         // localStorage.getItem('currentUser')
  //         console.log(User);
  //       }
  //     }),
  //     // catchError(this.handleError)
  //   );
  // }

  getDataUserById(userId: number): Observable<any> {
    const userUrl = `http://115.79.35.119:9004/api/hbc/user/${userId}`;
    let headers = new HttpHeaders();
    const localData = JSON.parse(localStorage.getItem('currentUser'));
    headers = headers.append('Authorization' , 'Bearer ' + localData.result.accessToken);
    return this.http.get<User[]>(userUrl ,{headers}); 
  }
  }
  

