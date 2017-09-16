import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-up-down-toggle',
  templateUrl: './up-down-toggle.component.html',
  styleUrls: ['./up-down-toggle.component.css']
})
export class UpDownToggleComponent {
  @Input() isContentVisible: boolean;
  @Input() parentToggleFunction;
  @Output() upDownToggleComponentClicked = new EventEmitter<boolean>();
  /**
   * clickFunction will trigger on click of the span icon. ClickFunction does not need to change the value of the
   * contentVisible variable, because it is calling the parent container to update the contentVisible value. This
   * component has a watcher on the isContentVisible variable, and will render the span based on the contentVisible
   * value of the parent component.
   */
  clickFunctions () {
    this.upDownToggleComponentClicked.emit(true);
  }
}
