import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-column-drop-down-page',
  templateUrl: './multi-column-drop-down-page.component.html',
  styleUrls: ['./multi-column-drop-down-page.component.css']
})
export class MultiColumnDropDownPageComponent {

  dropDownColumnConfig: any[] = [
    {
      title: "Brand",
      bindKey: "company",
    },
    {
      title: "Model",
      bindKey: "model",
      displayItem: true,
    }
  ];

  dropDownDataList : any [] = [
    {
      company: "Maruti",
      model: "Alto",
    },
    {
      company: "Tata",
      model: "Nexon",
    },
    {
      company: "Ford",
      model: "Endeavour",
    },
  ]

}
