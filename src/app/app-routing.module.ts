import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiColumnDropDownPageComponent } from './pages/multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';
import { MultiColumnMultiSelectPageComponent } from './pages/multi-column-multi-select-page/multi-column-multi-select-page.component';

const routes: Routes = [
  {
    path: "multi-column-drop-down-page",
    component: MultiColumnDropDownPageComponent
  },
  {
    path: "multi-column-multi-select-page",
    component: MultiColumnMultiSelectPageComponent
  },
  {
    path: "data-table-page",
    component: DataTablePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
