import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableComponent } from './data-table/data-table.component';
import { MultiColumnDropDownComponent } from './multi-column-drop-down/multi-column-drop-down.component';
import { MultiColumnDropDownMaterialComponent } from './multi-column-drop-down-material/multi-column-drop-down-material.component';
import { MultiColumnMultiSelectComponent } from './multi-column-multi-select/multi-column-multi-select.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MultiColumnDropDownComponent,
    DataTableComponent,
    MultiColumnDropDownMaterialComponent,
    MultiColumnMultiSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MultiColumnDropDownComponent,
    DataTableComponent,
    MultiColumnDropDownMaterialComponent,
    MultiColumnMultiSelectComponent,
  ]
})
export class UiComponentsModule { }
