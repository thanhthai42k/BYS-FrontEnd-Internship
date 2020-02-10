import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../user';
import {FormControl, FormGroup, FormControlDirective} from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail;
  constructor(private user: UserService, private http: HttpClient) {
   }
  ngOnInit() {
    const localData = JSON.parse(localStorage.getItem('currentUser'));
     this.user.getDataUserById(localData.result.userId).subscribe(data => {
      this.userDetail = new User();
      this.userDetail.Ten = data.result.userName,
      this.userDetail.Email = data.result.email,
      this.userDetail.SDT = data.result.phoneNumber,
      this.userDetail.Diachi = data.result.address,
      console.log(this.userDetail)
    })
  }
}
