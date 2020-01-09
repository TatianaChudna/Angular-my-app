import {Component} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@google'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@facebook'},
    {id: 3, first: 'Larry', last: 'Doe', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
}
