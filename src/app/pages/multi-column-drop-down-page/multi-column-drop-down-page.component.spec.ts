import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiColumnDropDownPageComponent } from './multi-column-drop-down-page.component';

describe('MultiColumnDropDownPageComponent', () => {
  let component: MultiColumnDropDownPageComponent;
  let fixture: ComponentFixture<MultiColumnDropDownPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiColumnDropDownPageComponent]
    });
    fixture = TestBed.createComponent(MultiColumnDropDownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
