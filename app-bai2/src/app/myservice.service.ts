import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  arrUser = [
    {userName: 'hothanhthai@gmail.com', password: '12345678'},
    {userName: 'huynhhuungocy@gmail.com', password: '12345678'}
  ]
}
