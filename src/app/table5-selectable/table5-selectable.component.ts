import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table5-selectable',
  templateUrl: './table5-selectable.component.html',
  styleUrls: ['./table5-selectable.component.css']
})
export class Table5SelectableComponent implements OnInit {
  @Input() clickFunction;
  @Input() columnKey1: string;
  @Input() columnKey2: string;
  @Input() columnKey3: string;
  @Input() columnKey4: string;
  @Input() columnKey5: string;
  @Input() columnName1: string;
  @Input() columnName2: string;
  @Input() columnName3: string;
  @Input() columnName4: string;
  @Input() columnName5: string;
  @Input() dataArray;
  @Input() isContentVisible: boolean;
  @Input() isTabCollapsible: boolean;
  @Input() tableClasses: string;
  @Input() tableTitle: string;
  @Input() titleClasses: string;
  @Output() table5RowClicked = new EventEmitter();
  contentVisible: boolean;
  tabCollapsible: boolean;
  ngOnInit() {
    this.contentVisible = (this.isContentVisible === true);
    this.tabCollapsible = (this.isTabCollapsible === true);
  }
  upDownToggleComponentClickedFunction () {
    this.setContentVisible();
  }
  rowClickedFunction (dataObject) {
    this.setContentVisible();
    this.table5RowClicked.emit(dataObject);
  }
  setContentVisible () {
    this.contentVisible = !this.contentVisible;
  }
}
