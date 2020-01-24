import {Component, OnInit} from '@angular/core';
import {HeaderModel} from '../../models/headerModel';
import {HeaderDescriptionModel} from '../../models/header-description.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public descriptionModel: HeaderDescriptionModel = new HeaderDescriptionModel();
  public model: HeaderModel = new HeaderModel();

  constructor() {
  }

  ngOnInit() {
  }
}
