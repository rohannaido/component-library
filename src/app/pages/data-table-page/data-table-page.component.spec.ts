import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePageComponent } from './data-table-page.component';

describe('DataTablePageComponent', () => {
  let component: DataTablePageComponent;
  let fixture: ComponentFixture<DataTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTablePageComponent]
    });
    fixture = TestBed.createComponent(DataTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
