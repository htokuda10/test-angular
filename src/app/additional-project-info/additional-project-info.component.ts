import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-project-info',
  templateUrl: './additional-project-info.component.html',
  styleUrls: ['./additional-project-info.component.css']
})
export class AdditionalProjectInfoComponent {
  projectStatusSelectOptions = {
    planning: 'Planning',
    construction: 'Construction',
    complete: 'Complete'
  };
  projectTimelineSelectOptions = {
    flexible: 'Flixible',
    days1to3: '1 - 3 Days',
    week1: '1 Week',
    week2: '2 Weeks',
    month1: '1 Month'
  };
  searchConsumerFunction() {
    console.log('Submitting additional project information...');
  }
}
