import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css']
})
export class TextInputFieldComponent {
  @Input() containerClasses;
  @Input() idValue;
  @Input() inputClasses;
  @Input() placeholderValue;
  @Input() textInputTitle;
  @Input() titleClasses;
}
