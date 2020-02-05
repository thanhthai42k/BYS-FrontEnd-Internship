import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { from } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private ActivatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    localStorage.removeItem('');
  }
}
