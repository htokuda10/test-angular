import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-consumer',
  templateUrl: './search-consumer.component.html',
  styleUrls: ['./search-consumer.component.css']
})
export class SearchConsumerComponent implements OnInit {

  @Input() consumers;
  @Input() isContentVisible: boolean;
  contentVisible: boolean;
  constructor() {
  }
  ngOnInit() {
    this.contentVisible = (this.isContentVisible === true);
  }
  upDownToggleComponentClickedFunction() {
    this.setContentVisible();
  }
  searchConsumerFunction() {
    console.log('Searching for consumers...');
  }
  setContentVisible() {
    this.contentVisible = !this.contentVisible;
  }
}
