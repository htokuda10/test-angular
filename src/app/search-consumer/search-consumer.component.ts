import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-consumer',
  templateUrl: './search-consumer.component.html',
  styleUrls: ['./search-consumer.component.css']
})
export class SearchConsumerComponent {

  @Input() consumers;
  @Input() isContentVisible;
}
