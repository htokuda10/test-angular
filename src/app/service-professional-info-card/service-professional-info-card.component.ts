import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-professional-info-card',
  templateUrl: './service-professional-info-card.component.html',
  styleUrls: ['./service-professional-info-card.component.css']
})
export class ServiceProfessionalInfoCardComponent {
  @Input() spData;
}
