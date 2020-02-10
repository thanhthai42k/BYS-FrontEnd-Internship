import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {
  results;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
//      this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
//       console.log(data);
//      this.results = data;
//  });
  }
  arrStudent = [
    {MSSV: 1, Ten:'Nguyễn văn A', NgaySinh:'1997-1-10', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Quản trị hệ thống thông tin', Lop: '42k21'},
    {MSSV: 2, Ten:'Trần Văn B', NgaySinh:'1996-10-2', Khoa: 'Thương mại điện tử', ChuyenNghanh: 'Thương mại điện tử', Lop: '42k21'},
    {MSSV: 3, Ten:'Chu Văn C', NgaySinh:'1995-10-3', Khoa: 'Luật', ChuyenNghanh: 'Luật doanh nghiệp', Lop: '42k19'},
    {MSSV: 4, Ten:'Trần Thanh D', NgaySinh:'1999-2-2', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Tin học quản lý', Lop: '42k14'},
    {MSSV: 5, Ten:'Nguyễn Mạnh E', NgaySinh:'1998-10-5', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Thống kê KTXH', Lop: '42k05'},
    {MSSV: 6, Ten:'Nguyễn Công F', NgaySinh:'1998-10-5', Khoa: 'Luật', ChuyenNghanh: 'Luật doanh nghiệp', Lop: '42k19'},
    {MSSV: 7, Ten:'Hoàng Thắng T', NgaySinh:'1998-1-5', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Tin học quản lý', Lop: '42k14'},
  ];
  arrUser = [
    {userName: 'ad', password: '1'},
    {userName: 'huynhhuungocy@gmail.com', password: '12345678'}
  ];
  arrKhoa = [
    {ID: 1 ,khoa:'Thống kê tin học'},
    {ID: 2 ,khoa:'Kinh tế'},
    {ID: 3,khoa:'Ngân hàng'},
    {ID: 4,khoa:'Thương mại điện tử'},
    {ID: 5,khoa:'Luật'},
    {ID: 6,khoa:'Quản trị kinh doanh'},
    {ID: 7,khoa:'Lý luận chính trị'},
    {ID: 8,khoa:'Kế toán'},
  ]
}
