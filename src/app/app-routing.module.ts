import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiColumnDropDownPageComponent } from './pages/multi-column-drop-down-page/multi-column-drop-down-page.component';
import { DataTablePageComponent } from './pages/data-table-page/data-table-page.component';

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
