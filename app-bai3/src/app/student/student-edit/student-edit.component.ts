import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student = new Student();
  constructor(private service : StudentService,
    private activatedRoute: ActivatedRoute) {
   
   }
  
  ngOnInit ():  void  {
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
}
