import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-bai2';
  constructor (private service : MyserviceService) {}
}
