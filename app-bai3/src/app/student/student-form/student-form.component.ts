import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
   form: FormGroup;
  constructor(private service : StudentService) {
    this.form =  new FormGroup({
      mssv : new FormControl() ,
     ten: new FormControl() ,
     ngaysinh : new FormControl()  ,
     khoa:new FormControl() ,
     chuyennghanh :new FormControl()  ,
     lop: new FormControl()   
    })
   }

  ngOnInit() {

  }
addStudent() {
  console.log(this.form.value);
  this.service.arrStudent.unshift(
    {
      MSSV : this.form.value.mssv,
      Ten: this.form.value.ten,
      NgaySinh : this.form.value.ngaysinh,
      Khoa: this.form.value.khoa,
      ChuyenNghanh : this.form.value.chuyennghanh,
      Lop : this.form.value.lop
    }  
  )
}
}
