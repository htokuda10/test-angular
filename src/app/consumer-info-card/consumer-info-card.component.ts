import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consumer-info-card',
  templateUrl: './consumer-info-card.component.html',
  styleUrls: ['./consumer-info-card.component.css']
})
export class ConsumerInfoCardComponent {
  @Input() consumerData;
}
