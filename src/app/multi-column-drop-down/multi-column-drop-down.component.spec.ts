import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnDropDownComponent } from './multi-column-drop-down.component';

describe('MultiColumnDropDownComponent', () => {
  let component: MultiColumnDropDownComponent;
  let fixture: ComponentFixture<MultiColumnDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiColumnDropDownComponent]
    });
    fixture = TestBed.createComponent(MultiColumnDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
