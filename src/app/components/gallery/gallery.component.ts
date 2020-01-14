import {Component, OnInit} from '@angular/core';
import {GalleryModel} from '../../models/gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public images: GalleryModel[];

  constructor() {
    this.images = [
      new GalleryModel('party_girl.jpeg'),
      new GalleryModel('christmas_cuties.jpeg'),
      new GalleryModel('casting_call.jpeg')
    ];
  }

  ngOnInit() {
  }
}
