import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  arrStudent = [
    {MSSV: 1, Ten:'Nguyễn văn A', NgaySinh:'1997-10-10', Khoa: 'Thống kê - tin học', ChuyenNghanh: 'Quản trị hệ thống thông tin', Lop: '42k21'},
    {MSSV: 2, Ten:'Trần Văn B', NgaySinh:'1995-22-10', Khoa: 'Thương mại điện tử', ChuyenNghanh: 'Thương mại điện tử', Lop: '42k21'},
    {MSSV: 3, Ten:'Chu Văn C', NgaySinh:'1997-11-22', Khoa: 'luật', ChuyenNghanh: 'Luật doanh nghiệp', Lop: '42k19'},
    {MSSV: 4, Ten:'Trần Thanh D', NgaySinh:'1999-10-5', Khoa: 'Thống kê - tin học', ChuyenNghanh: 'Tin học quản lý', Lop: '42k14'},
    {MSSV: 5, Ten:'Nguyễn Mạnh E', NgaySinh:'1998-10-12', Khoa: 'Thống kê - tin học', ChuyenNghanh: 'Thống kê KTXH', Lop: '42k05'},
  ];
  arrUser = [
    {userName: 'hothanhthai@gmail.com', password: '12345678'},
    {userName: 'huynhhuungocy@gmail.com', password: '12345678'}
  ]
}
