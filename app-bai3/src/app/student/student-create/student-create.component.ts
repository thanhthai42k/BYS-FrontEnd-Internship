import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/model/student';




@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  [x: string]: any;
  student = new Student();
  constructor(private service : StudentService ) { 
    
  }

  ngOnInit ()  {
      this.student.MSSV = this.service.arrStudent.length + 1;
}
// addStudent() {
//   console.log(this.form.value);
//   this.service.arrStudent.push(
//     {
//       MSSV : this.form.value.mssv,
//       Ten: this.form.value.ten,
//       NgaySinh : this.form.value.ngaysinh,
//       Khoa: this.form.value.khoa,
//       ChuyenNghanh : this.form.value.chuyennghanh,
//       Lop : this.form.value.lop
//     }
//   )
//   alert("Successfully!"); 
// }
}
