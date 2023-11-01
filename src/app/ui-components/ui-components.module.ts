import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableComponent } from './data-table/data-table.component';
import { MultiColumnDropDownComponent } from './multi-column-drop-down/multi-column-drop-down.component';
import { MultiColumnDropDownMaterialComponent } from './multi-column-drop-down-material/multi-column-drop-down-material.component';



@NgModule({
  declarations: [
    MultiColumnDropDownComponent,
    DataTableComponent,
    MultiColumnDropDownMaterialComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    MultiColumnDropDownComponent,
    DataTableComponent,
    MultiColumnDropDownMaterialComponent,
  ]
})
export class UiComponentsModule { }