import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';
import {FormControl, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  // [x: string]: any;
  @ViewChild('formCreate', { static: true }) formCreate;
  student = new Student();
  form: FormGroup;
  constructor(private service : StudentService ) { 
    
  }

  ngOnInit ()  {
      this.formCreate =  new FormGroup({
        mssv : new FormControl() ,
       ten: new FormControl() ,
       ngaysinh : new FormControl(),
       khoa:new FormControl() ,
       chuyennghanh :new FormControl()  ,
       lop: new FormControl()   
      })
      this.student.MSSV = this.service.arrStudent.length + 1;
}
addStudent() {
  console.log(this.formCreate);
  this.service.arrStudent.push(
    {
      MSSV : this.form.value.mssv,
      Ten: this.form.value.ten,
      NgaySinh : this.form.value.ngaysinh,
      Khoa: this.form.value.khoa,
      ChuyenNghanh : this.form.value.chuyennghanh,
      Lop : this.form.value.lop
    }
  )
  alert("Successfully!"); 
}
}
