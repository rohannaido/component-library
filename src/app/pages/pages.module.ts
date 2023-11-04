import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UiComponentsModule } from '../ui-components/ui-components.module';

import { MultiColumnDropDownPageComponent } from './multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './data-table-page/data-table-page.component';
import { MultiColumnMultiSelectPageComponent } from './multi-column-multi-select-page/multi-column-multi-select-page.component';



@NgModule({
  declarations: [
    MultiColumnDropDownPageComponent,
    DataTablePageComponent,
    MultiColumnMultiSelectPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UiComponentsModule
  ]
})
export class PagesModule { }
