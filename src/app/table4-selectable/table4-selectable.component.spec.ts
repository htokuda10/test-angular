import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table4SelectableComponent } from './table4-selectable.component';

describe('Table4SelectableComponent', () => {
  let component: Table4SelectableComponent;
  let fixture: ComponentFixture<Table4SelectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table4SelectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table4SelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
