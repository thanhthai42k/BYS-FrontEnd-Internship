import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/model/student';
// import { Observer } from 'rxjs/internal/types';
import { Observer } from 'rxjs';



@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  
})
export class StudentFormComponent implements OnInit {
  [x: string]: any;
  @Input () typeAction : string;
  @Input () binding: Student;

   form: FormGroup;

  constructor(private service : StudentService) {
    
   }
   
  ngOnInit() {
    this.form =  new FormGroup({
      mssv : new FormControl(this.binding.MSSV) ,
     ten: new FormControl(this.binding.Ten) ,
     ngaysinh : new FormControl(this.binding.NgaySinh)  ,
     khoa:new FormControl(this.binding.Khoa) ,
     chuyennghanh :new FormControl(this.binding.ChuyenNghanh)  ,
     lop: new FormControl(this.binding.Lop)   
    })
   if (this.typeAction !== 'edit' &&  this.typeAction !== 'create'){
      return this.form.disable();
   }
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
  alert("Successfully!"); 
}
// updateStudent (MSSV: string) {
//   for (var i= 0; i < this.service.arrStudent.length; i++) {
//    if (this.service.arrStudent[i].MSSV == MSSV) {
//     this.service.arrStudent.splice(i,1);
//      this.service.arrStudent.push(
//     {
//       MSSV : this.form.value.mssv,
//       Ten: this.form.value.ten,
//       NgaySinh : this.form.value.ngaysinh,
//       Khoa: this.form.value.khoa,
//       ChuyenNghanh : this.form.value.chuyennghanh,
//       Lop : this.form.value.lop
//     })
//   }
   
//   }}
// updateUser(student){
//   this.myservice.getUpdate(student.MSSV)
//   .subscribe(newitem => {
//     this.updateArray(newitem);
//   });
// }

// updateArray(newitem){
//   this.itemArray.items[newitem.MSSV].Ten = newitem.Ten
// }


}


