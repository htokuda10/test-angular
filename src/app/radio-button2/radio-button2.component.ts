import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button2',
  templateUrl: './radio-button2.component.html',
  styleUrls: ['./radio-button2.component.css']
})
export class RadioButton2Component {
  @Input() containerClasses: string;
  @Input() idValue1: string;
  @Input() idValue2: string;
  @Input() radioButtonClasses: string;
  @Input() radioButtonLabel1: string;
  @Input() radioButtonLabel2: string;
  @Input() radioButtonName: string;
  @Input() radioButtonTitle: string;
  @Input() radioButtonValue1: string;
  @Input() radioButtonValue2: string;
  @Input() titleClasses: string;
}
