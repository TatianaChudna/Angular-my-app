import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../dialog/dialog.component';
import {ArticleModel} from '../../../models/articleModel';
import {ArticleDescriptionModel} from '../../../models/article-description.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public descriptionModel: ArticleDescriptionModel = new ArticleDescriptionModel();
  public model: ArticleModel = new ArticleModel();
  public page = 1;
  public pageSize = 1;

  constructor(public dialog: MatDialog) {
    this.model = new ArticleModel();
  }

  public openDialog(item): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        name: 'Do you want delete this article?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const array = this.model.articles;
      if (result === true) {
        array.splice(array.indexOf(item), 1);
      }
    });
  }

  ngOnInit() {
  }
}
