import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
form: FormGroup;
userEdit;
  constructor(private user : UserService) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        hoten: new FormControl(),
        email: new FormControl(),
        sodienthoai : new FormControl(),
        diachi : new FormControl()
      }
    )
    const localData = JSON.parse(localStorage.getItem('currentUser'));
      this.user.getDataUserById(localData.result.userId).subscribe(data => {
        this.userEdit = new User();
        this.userEdit.Ten = data.result.userName,
        this.userEdit.Email = data.result.email,
        this.userEdit.SDT = data.result.phoneNumber,
        this.userEdit.Diachi = data.result.address
        console.log(this.userEdit)
      })
      }

}
