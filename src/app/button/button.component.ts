import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonClasses;
  @Input() buttonTitle;
  @Input() buttonValue;
  @Input() containerClasses;
  @Input() idValue;
  @Output() buttonComponentClicked = new EventEmitter<boolean>();
  clickFunction() {
    this.buttonComponentClicked.emit(true);
  }
}
