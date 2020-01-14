import {Component, OnInit} from '@angular/core';
import {BlogModel} from '../../../models/blog.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  public plates: BlogModel[];

  constructor() {
    this.plates = [
      // tslint:disable-next-line:max-line-length
      new BlogModel('Party girls', 'Outfits to take them from family dos to New Year countdowns', 'party_girl.jpeg', 'Black sequin dress from £18 | Navy dress and shrug set from £14'),
      // tslint:disable-next-line:max-line-length
      new BlogModel('Christmas cuties', 'Your little elves will look especially sweet in a festive palette of red and white', 'christmas_cuties.jpeg', 'Christmas jumpers from £8'),
      // tslint:disable-next-line:max-line-length
      new BlogModel('Casting call', 'Whether they\'re an angel or sheep number 3, they\'ll steal the show in our nativity costumes', 'casting_call.jpeg', 'Fairy £10 | Shepherd £10 | Star £8 | Angel £10 | Sheep £10')
    ];
  }

  ngOnInit() {
  }

}
