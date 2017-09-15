import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButton2Component } from './radio-button2.component';

describe('RadioButton2Component', () => {
  let component: RadioButton2Component;
  let fixture: ComponentFixture<RadioButton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
