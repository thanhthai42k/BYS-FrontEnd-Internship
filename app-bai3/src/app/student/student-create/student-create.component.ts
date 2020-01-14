import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';




@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student = new Student();
  constructor(private service : StudentService ) { 
    
  }

  ngOnInit ()  {
      this.student.MSSV = this.service.arrStudent.length + 1;
}}
