import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownToggleComponent } from './up-down-toggle.component';

describe('UpDownToggleComponent', () => {
  let component: UpDownToggleComponent;
  let fixture: ComponentFixture<UpDownToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
