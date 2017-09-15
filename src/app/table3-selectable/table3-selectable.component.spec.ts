import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table3SelectableComponent } from './table3-selectable.component';

describe('Table3SelectableComponent', () => {
  let component: Table3SelectableComponent;
  let fixture: ComponentFixture<Table3SelectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table3SelectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table3SelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
