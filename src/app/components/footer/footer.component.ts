import {Component, OnInit} from '@angular/core';
import {FooterModel} from '../../models/footer.model';
import {IconModel} from '../../models/icon.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public plates: FooterModel[];
  public icons: IconModel[];

  constructor() {
    this.plates = [
      // tslint:disable-next-line:max-line-length
      new FooterModel('Lorem ipsum dolor sit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?'),
      // tslint:disable-next-line:max-line-length
      new FooterModel('Lorem ipsum dolor', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.')
    ];

    this.icons = [
      new IconModel('facebook'),
      new IconModel('twitter'),
      new IconModel('google-plus'),
      new IconModel('linkedin'),
      new IconModel('instagram'),
      new IconModel('pinterest')
    ];
  }

  ngOnInit() {
  }

}
