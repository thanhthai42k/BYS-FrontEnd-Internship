import { Component, OnInit, Input } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import { User} from '../user';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() binding : User;
  @Input() typeAction : string;
  form : FormGroup;
  constructor(private http: HttpClient, private service : UserService  ) { }

  ngOnInit() {
    this.form =  new FormGroup({
      hoten: new FormControl(this.binding.Ten),
      email: new FormControl(this.binding.Email),
      sodienthoai : new FormControl(this.binding.SDT),
      diachi : new FormControl(this.binding.Diachi),
     });
     if ( this.typeAction !== 'edit')
     {
       this.form.disable();
     }
  }
}
