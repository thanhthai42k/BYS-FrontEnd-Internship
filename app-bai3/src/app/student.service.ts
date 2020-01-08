import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  arrStudent = [
    {MSSV: '00001', Ten:'Nguyễn văn A', NgaySinh:'2/10/1997', Khoa: 'TKTH', ChuyenNghanh: 'QTHTTT', Lop: '42k21'},
    {MSSV: '00002', Ten:'Trần Văn B', NgaySinh:'20/2/1995', Khoa: 'TKTH', ChuyenNghanh: 'QTHTTT', Lop: '42k21'},
    {MSSV: '00003', Ten:'Chu Văn C', NgaySinh:'22/11/1997', Khoa: 'TKTH', ChuyenNghanh: 'QTHTTT', Lop: '42k21'},
    {MSSV: '00004', Ten:'Trần Thanh D', NgaySinh:'5/10/1999', Khoa: 'TKTH', ChuyenNghanh: 'QTHTTT', Lop: '42k21'},
    {MSSV: '00005', Ten:'Nguyễn Mạnh E', NgaySinh:'12/10/1998', Khoa: 'TKTH', ChuyenNghanh: 'QTHTTT', Lop: '42k21'},
  ];
  arrUser = [
    {userName: 'hothanhthai@gmail.com', password: '12345678'},
    {userName: 'huynhhuungocy@gmail.com', password: '12345678'}
  ]
}
