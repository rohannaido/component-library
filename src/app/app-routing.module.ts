import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiColumnDropDownComponent } from './multi-column-drop-down/multi-column-drop-down.component';
import { MultiColumnDropDownPageComponent } from './multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './data-table-page/data-table-page.component';

const routes: Routes = [
  {
    path: "multi-column-drop-down-page",
    component: MultiColumnDropDownPageComponent
  },
  {
    path: "data-table-page",
    component: DataTablePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
