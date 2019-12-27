import { Component, OnInit } from '@angular/core';
import {ARTICLES} from './mock-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
