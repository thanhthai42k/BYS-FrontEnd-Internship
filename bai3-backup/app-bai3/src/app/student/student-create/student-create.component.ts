import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';
import {FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




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
  constructor(private service : StudentService, private activatedRoute: ActivatedRoute,
    private router: Router ) { 
    
  }

  ngOnInit ()  {
      this.form =  new FormGroup({
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
  console.log(this.formCreate.form.value);
  this.service.arrStudent.push(
    {
      MSSV : this.formCreate.form.value.mssv,
      Ten: this.formCreate.form.value.ten,
      NgaySinh : this.formCreate.form.value.ngaysinh,
      Khoa: this.formCreate.form.value.khoa,
      ChuyenNghanh : this.formCreate.form.value.chuyennghanh,
      Lop : this.formCreate.form.value.lop
      
    }
  )
  alert("Successfully!"); 
  this.router.navigate(['student/list']);
}
}
