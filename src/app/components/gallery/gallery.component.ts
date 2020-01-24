import {Component, OnInit} from '@angular/core';
import {GalleryModel} from '../../models/galleryModel';
import {GalleryDescriptionModel} from '../../models/gallery-description.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public descriptionModel: GalleryDescriptionModel = new GalleryDescriptionModel();
  public model: GalleryModel = new GalleryModel();

  constructor() {
  }

  ngOnInit() {
  }
}
