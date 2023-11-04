import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnMultiSelectPageComponent } from './multi-column-multi-select-page.component';

describe('MultiColumnMultiSelectPageComponent', () => {
  let component: MultiColumnMultiSelectPageComponent;
  let fixture: ComponentFixture<MultiColumnMultiSelectPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiColumnMultiSelectPageComponent]
    });
    fixture = TestBed.createComponent(MultiColumnMultiSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
