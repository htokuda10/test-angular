import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table5-selectable',
  templateUrl: './table5-selectable.component.html',
  styleUrls: ['./table5-selectable.component.css']
})
export class Table5SelectableComponent {
  @Input() clickFunction;
  @Input() columnKey1;
  @Input() columnKey2;
  @Input() columnKey3;
  @Input() columnKey4;
  @Input() columnKey5;
  @Input() columnName1;
  @Input() columnName2;
  @Input() columnName3;
  @Input() columnName4;
  @Input() columnName5;
  @Input() dataArray;
  @Input() isContentVisible;
  @Input() isTabCollapsible;
  @Input() tableClasses;
  @Input() tableTitle;
  @Input() titleClasses;
}
