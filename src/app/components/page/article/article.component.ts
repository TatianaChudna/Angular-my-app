import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ARTICLES} from '../mock-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
@Input() value: string;

  public articles = ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
