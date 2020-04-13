import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsergroupService {

  constructor(private http: HttpClient) { }
  getDataUserGroupById(): Observable<any> {
    const userUrl = `http://115.79.35.119:9004/api/hbc/usergroup/getall`;
    // const userUrl = `http://115.79.35.119:9004/api/hbc/usergroup/filter/${pageIndex}/${pageSize}`;
    let headers = new HttpHeaders();
    const localData = JSON.parse(localStorage.getItem('currentUser'));
    headers = headers.append('Authorization' , 'Bearer ' + localData.result.accessToken);
    return this.http.get(userUrl ,{headers}); 
  }
  arrUserGroup = [
    {id: 1,tennhom: 'Chuyên viên báo giá', mota:'Báo giá', chucnangduocdung:'Xem danh sách gói thầu' },
    {id: 2,tennhom: 'Admin CRM', mota:'Quản trị CRM',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 3, tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 4,tennhom: 'Chuyên viên báo giá', mota:'Báo giá',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 5,tennhom: 'Admin CRM', mota:'Quản trị CRM',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 6,tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 7,tennhom: 'Chuyên viên báo giá', mota:'Báo giá',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 8,tennhom: 'Admin CRM', mota:'Quản trị CRM'},
    {id: 9,tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'},  {id: 10,tennhom: 'Chuyên viên báo giá', mota:'Báo giá'},
    {id: 11,tennhom: 'Admin CRM', mota:'Quản trị CRM',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 12,tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 13,tennhom: 'Chuyên viên báo giá', mota:'Báo giá',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 14,tennhom: 'Admin CRM', mota:'Quản trị CRM'},
    {id: 15,tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 16,tennhom: 'Chuyên viên báo giá', mota:'Báo giá',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 17,tennhom: 'Admin CRM', mota:'Quản trị CRM',chucnangduocdung:'Xem danh sách gói thầu'},
    {id: 18,tennhom: 'Ngoài phòng dự thầu', mota:'Phòng kỹ thuật, dự thầu',chucnangduocdung:'Xem danh sách gói thầu'}
  ]
  arrChucNang = [
    {id:1, chucnang: 'Xem danh sách gói thầu'},
    {id:2,chucnang:'Xem chi tiết gói thầu'},
    {id:3,chucnang:'Tạo mới gói thầu'},
    {id:4,chucnang:'Sửa gói thầu'},
    {id:5,chucnang:'Xóa gói thầu'},
    {id:6,chucnang:'Quản lý người dùng'},
    {id:7,chucnang:'Quản lý nhóm người dùng'},
    {id:8,chucnang:'Báo cáo theo dõi'}
  ]
}
