import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routeHome = '/home';
  public routeGallery = '/gallery';
  public routeTable = '/table';
  public routeBlog = '/blog';

  constructor() {
  }

  ngOnInit() {
  }

}
