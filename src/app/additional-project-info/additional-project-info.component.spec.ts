import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalProjectInfoComponent } from './additional-project-info.component';

describe('AdditionalProjectInfoComponent', () => {
  let component: AdditionalProjectInfoComponent;
  let fixture: ComponentFixture<AdditionalProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalProjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
