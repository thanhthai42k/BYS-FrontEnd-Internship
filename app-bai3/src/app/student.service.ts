import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  arrStudent = [
    {MSSV: 1, Ten:'Nguyễn văn A', NgaySinh:'10/20/1997', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Quản trị hệ thống thông tin', Lop: '42k21'},
    {MSSV: 2, Ten:'Trần Văn B', NgaySinh:'10/2/1996', Khoa: 'Thương mại điện tử', ChuyenNghanh: 'Thương mại điện tử', Lop: '42k21'},
    {MSSV: 3, Ten:'Chu Văn C', NgaySinh:'01/20/1995', Khoa: 'Luật', ChuyenNghanh: 'Luật doanh nghiệp', Lop: '42k19'},
    {MSSV: 4, Ten:'Trần Thanh D', NgaySinh:'10/10/1999', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Tin học quản lý', Lop: '42k14'},
    {MSSV: 5, Ten:'Nguyễn Mạnh E', NgaySinh:'10/5/1998', Khoa: 'Thống kê tin học', ChuyenNghanh: 'Thống kê KTXH', Lop: '42k05'},
  ];
  arrUser = [
    {userName: 'hothanhthai@gmail.com', password: '12345678'},
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
