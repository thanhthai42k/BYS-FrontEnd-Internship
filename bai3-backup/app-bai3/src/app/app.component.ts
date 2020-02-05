import { Component, Input , OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private http: HttpClient, private router: Router) {}
  results;
  @ViewChild('form', { static: true }) form;
  title = 'app-bai3';
  @Input () checkUser : string;
  ngOnInit(): void {
//     this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
//       console.log(data);
//      this.results = data;
//  });
  }
 isShow = true;
 logout() {
   localStorage.removeItem('item');
this.router.navigate(['']);
   
 }
}
