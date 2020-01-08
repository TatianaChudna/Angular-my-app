import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
 images = ['party_girl', 'christmas_cuties', 'casting_call', 'girls_clothing', 'boys_clothing'].map((n) => `/assets/images/${n}.jpeg`);
  constructor() { }

  ngOnInit() {
  }
}
