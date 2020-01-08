import { Component, OnInit } from '@angular/core';
import {PLATES} from './mock-blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public plates = PLATES;

  constructor() { }

  ngOnInit() {
  }

}
