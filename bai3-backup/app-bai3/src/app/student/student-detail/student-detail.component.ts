import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import {Student} from 'src/model/student';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
student = new Student();
  constructor(private service : StudentService, private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(res => {
      const index = this.service.arrStudent.findIndex(i => i.MSSV === +res['params'].mssv);
      this.student.MSSV =  this.service.arrStudent[index].MSSV;
      this.student.Ten = this.service.arrStudent[index].Ten;
      this.student.NgaySinh = this.service.arrStudent[index].NgaySinh;
      this.student.Khoa = this.service.arrStudent[index].Khoa;
      this.student.ChuyenNghanh = this.service.arrStudent[index].ChuyenNghanh;
      this.student.Lop = this.service.arrStudent[index].Lop;
    })
  }
  }
