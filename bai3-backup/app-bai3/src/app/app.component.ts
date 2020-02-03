import { Component, Input , OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('form', { static: true }) form;
  title = 'app-bai3';
  @Input () checkUser : string;
  ngOnInit(): void {}
 isShow = true;
}
