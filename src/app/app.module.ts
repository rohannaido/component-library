import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiColumnDropDownComponent } from './multi-column-drop-down/multi-column-drop-down.component';
import { MultiColumnDropDownPageComponent } from './multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './data-table-page/data-table-page.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiColumnDropDownComponent,
    MultiColumnDropDownPageComponent,
    DataTablePageComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
