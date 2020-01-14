import {Component, OnInit} from '@angular/core';
import {ListModel} from '../../models/list.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@google'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@facebook'},
    {id: 3, first: 'Larry', last: 'Doe', handle: '@twitter'},
  ];

  public headElements = ['ID', 'First', 'Last', 'Handle'];

  public listItem: ListModel[];

  constructor() {
    this.listItem = [
      new ListModel('- Cras justo odio'),
      new ListModel('- Dapibus ac facilisis in'),
      new ListModel('- Morbi leo risus'),
      new ListModel('- Porta ac consectetur ac'),
      new ListModel('- Vestibulum at eros'),
    ];
  }

  ngOnInit() {
  }
}
