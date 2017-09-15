import { Component } from '@angular/core';
import ServiceRequestData from '../../assets/statics/ServiceRequestData';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent {

  serviceRequestData = new ServiceRequestData();
  consumers = this.serviceRequestData.getConsumersList();
}
