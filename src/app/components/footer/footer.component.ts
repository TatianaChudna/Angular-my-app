import {Component, OnInit} from '@angular/core';
import {FooterModel} from '../../models/footerModel';
import {FooterDescriptionModel} from '../../models/footer-description.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public descriptionModel: FooterDescriptionModel = new FooterDescriptionModel();
  public model: FooterModel = new FooterModel();

  constructor() {
  }

  ngOnInit() {
  }

}
