import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../user';
import {FormControl, FormGroup, FormControlDirective} from '@angular/forms';
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() binding : User;
  userDetail= new User();
  form : FormGroup;
  data1;
  constructor(private user: UserService, private http: HttpClient) {
  //   const localData = JSON.parse(localStorage.getItem('currentUser'));
  //   console.log(localData.result.userId);
  //  this.user.getDataUserById(localData.result.userId).subscribe(
  //     data => {
  //       data.result.userName
  //       this.data1 = data;
  //     }
  //   )
   }
  ngOnInit() {
    this.form =  new FormGroup({
     hoten: new FormControl(),
     email: new FormControl() ,
     sodienthoai : new FormControl(),
     diachi : new FormControl(),
    });
    const localData = JSON.parse(localStorage.getItem('currentUser'));
     this.user.getDataUserById(localData.result.userId).subscribe(data => {
      this.userDetail.Ten = data.result.firstName + ' ' + data.result.lastName,
      this.userDetail.Email = data.result.email,
      this.userDetail.SDT = data.result.phoneNumber,
      this.userDetail.Diachi = data.result.address,
      console.log(this.userDetail)
    })
  }
  
}
