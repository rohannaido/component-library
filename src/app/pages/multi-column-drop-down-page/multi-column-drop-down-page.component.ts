import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-column-drop-down-page',
  templateUrl: './multi-column-drop-down-page.component.html',
  styleUrls: ['./multi-column-drop-down-page.component.css']
})
export class MultiColumnDropDownPageComponent implements OnInit {

  dropDownColumnConfig: any[] = [
    {
      title: "Id",
      bindKey: "docId",
    },
    {
      title: "Doctor Name",
      bindKey: "doctorName",
      displayItem: true,
    },
    {
      title: "Dept.",
      bindKey: "department",
    },
    {
      title: "Exp. (yrs)",
      bindKey: "experience",
    }
  ];

  dropDownDataList : any [] = [
    {
      docId: 1,
      doctorName: "John",
      department: "Cardiology",
      experience: "10",
    },
    {
      docId: 2,
      doctorName: "Ken",
      department: "Cardiology",
      experience: "12",
    },
    {
      docId: 3,
      doctorName: "Rob",
      department: "ENT",
      experience: "5",
    },
    {
      docId: 4,
      doctorName: "Tom",
      department: "Orthopedic",
      experience: "16",
    },
    {
      docId: 5,
      doctorName: "Kunal",
      department: "ENT",
      experience: "3",
    },
    {
      docId: 6,
      doctorName: "Michael",
      department: "Cardiology",
      experience: "19",
    },
  ]
  dropDownDataListMaterial: any[] = [];

  doctor: any | undefined;
  doctorMaterial: any | undefined;

  displayValue: string = "";
  displayMaterialValue: string = "";

  ngOnInit(): void {

    this.dropDownDataListMaterial = JSON.parse(JSON.stringify(this.dropDownDataList));

    let array: any[] = [];
    let temp: any[] = [];
    let number = 1;
    for(let i = 0; i < 100; i++){
      temp = this.dropDownDataListMaterial.map((item) => {
        item.docId = number;
        number++;
        item = JSON.parse(JSON.stringify(item));
        return item;
      })
      array = array.concat(temp)
    }

    this.dropDownDataListMaterial = array;
  }

  handleDropDownChange(value: any){
    this.displayValue = JSON.stringify(value);
  }

  handleDropDownMaterialChange(value: any){
    this.displayMaterialValue = JSON.stringify(value);
  }

}
