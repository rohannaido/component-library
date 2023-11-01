import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnDropDownMaterialComponent } from './multi-column-drop-down-material.component';

describe('MultiColumnDropDownMaterialComponent', () => {
  let component: MultiColumnDropDownMaterialComponent;
  let fixture: ComponentFixture<MultiColumnDropDownMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiColumnDropDownMaterialComponent]
    });
    fixture = TestBed.createComponent(MultiColumnDropDownMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
