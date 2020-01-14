import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service : StudentService) { }

  ngOnInit() {
    
  }
isShow = false;


removeStudent (MSSV : number) {
  const index = this.service.arrStudent.findIndex(i => i.MSSV === MSSV);
  this.service.arrStudent.splice(index,1);
}
}
