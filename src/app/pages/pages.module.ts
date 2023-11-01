import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UiComponentsModule } from '../ui-components/ui-components.module';

import { MultiColumnDropDownPageComponent } from './multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './data-table-page/data-table-page.component';



@NgModule({
  declarations: [
    MultiColumnDropDownPageComponent,
    DataTablePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    UiComponentsModule
  ]
})
export class PagesModule { }
