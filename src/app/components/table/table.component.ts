import {Component, OnInit} from '@angular/core';
import {ListModel} from '../../models/listModel';
import {ListDescriptionModel} from '../../models/list-description.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public descriptionList: ListDescriptionModel = new ListDescriptionModel();
  public headElements = ['ID', 'First', 'Last', 'Handle'];
  public item: ListModel = new ListModel();

  constructor() {
  }

  ngOnInit() {
  }
}
