import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table5SelectableComponent } from './table5-selectable.component';

describe('Table5SelectableComponent', () => {
  let component: Table5SelectableComponent;
  let fixture: ComponentFixture<Table5SelectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table5SelectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table5SelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
