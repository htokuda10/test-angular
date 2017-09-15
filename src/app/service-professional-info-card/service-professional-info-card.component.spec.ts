import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProfessionalInfoCardComponent } from './service-professional-info-card.component';

describe('ServiceProfessionalInfoCardComponent', () => {
  let component: ServiceProfessionalInfoCardComponent;
  let fixture: ComponentFixture<ServiceProfessionalInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProfessionalInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProfessionalInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
