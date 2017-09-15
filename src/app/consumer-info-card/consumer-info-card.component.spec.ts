import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerInfoCardComponent } from './consumer-info-card.component';

describe('ConsumerInfoCardComponent', () => {
  let component: ConsumerInfoCardComponent;
  let fixture: ComponentFixture<ConsumerInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
