import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  arrUser = [
    {userName: 'hothanhthai', password: '12345678'},
    {userName: 'huynhhuungocy', password: '12345678'}
  ]
 
}
