import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import {Student} from 'src/model/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
student = new Student();
  constructor(private service : StudentService) { }

  ngOnInit() {
    
    // const index = this.service.arrStudent.findIndex(i => i.MSSV)
     this.student.MSSV = this.service.arrStudent[0].MSSV;
      this.student.Ten = this.service.arrStudent[0].Ten;
      this.student.NgaySinh = this.service.arrStudent[0].NgaySinh;
      this.student.Khoa = this.service.arrStudent[0].Khoa;
      this.student.ChuyenNghanh = this.service.arrStudent[0].ChuyenNghanh;
      this.student.Lop = this.service.arrStudent[0].Lop;
  }

}
