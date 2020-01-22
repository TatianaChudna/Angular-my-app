import {Component, OnInit} from '@angular/core';
import {HeaderModel} from '../../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public lists: HeaderModel[];

  constructor() {
    this.lists = [
      new HeaderModel('Home', '/home'),
      new HeaderModel('Gallery', '/gallery'),
      new HeaderModel('List & table', '/table'),
      new HeaderModel('Blog', '/blog'),
      new HeaderModel('Login', '/login'),
      new HeaderModel('Registration', '/registration')
    ];
  }

  ngOnInit() {
  }
}
