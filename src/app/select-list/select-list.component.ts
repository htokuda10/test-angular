import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent {

  @Input() containerClasses: string;
  @Input() idValue: string;
  @Input() selectData;
  @Input() selectListTitle: string;
  @Input() titleClasses: string;
  selectDataKeys = Object.keys;
}
