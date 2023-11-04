import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnMultiSelectComponent } from './multi-column-multi-select.component';

describe('MultiColumnMultiSelectComponent', () => {
  let component: MultiColumnMultiSelectComponent;
  let fixture: ComponentFixture<MultiColumnMultiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiColumnMultiSelectComponent]
    });
    fixture = TestBed.createComponent(MultiColumnMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
