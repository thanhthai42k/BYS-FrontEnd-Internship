import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
  import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  // @Input () id : number;
  @ViewChild('formEdit', { static: true }) formEdit;
  student = new Student();
  form : FormGroup;
  constructor(private service : StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
   
   }
  
  ngOnInit ():  void  {
    this.form =  new FormGroup({
      mssv : new FormControl() ,
     ten: new FormControl() ,
     ngaysinh : new FormControl(),
     khoa:new FormControl() ,
     chuyennghanh :new FormControl()  ,
     lop: new FormControl()   
    })
    this.activatedRoute.paramMap.subscribe(res => {
      const index = this.service.arrStudent.findIndex(i => i.MSSV  === +res['params'].mssv );
      console.log(this.service.arrStudent[index]);
      this.student.MSSV =  this.service.arrStudent[index].MSSV;
      this.student.Ten = this.service.arrStudent[index].Ten;
      this.student.NgaySinh = this.service.arrStudent[index].NgaySinh;
      this.student.Khoa = this.service.arrStudent[index].Khoa;
      this.student.ChuyenNghanh = this.service.arrStudent[index].ChuyenNghanh;
      this.student.Lop = this.service.arrStudent[index].Lop;
    })
  }
editStudent(){
  this.service.arrStudent.forEach(item => {
    if (item.MSSV === this.formEdit.form.value.mssv){
      item.Ten = this.formEdit.form.value.ten;
      item.NgaySinh = this.formEdit.form.value.ngaysinh;
      item.Khoa = this.formEdit.form.value.khoa;
      item.ChuyenNghanh = this.formEdit.form.value.chuyennghanh;
      item.Lop = this.formEdit.form.value.lop;
      this.router.navigate(['student/list']);
      return;
    }
  })
}
}

