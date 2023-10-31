import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-column-drop-down-page',
  templateUrl: './multi-column-drop-down-page.component.html',
  styleUrls: ['./multi-column-drop-down-page.component.css']
})
export class MultiColumnDropDownPageComponent implements OnInit {

  dropDownColumnConfig: any[] = [
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

  doctor: any | undefined;
  displayValue: string = "";

  ngOnInit(): void {
  }

  handleDropDownChange(value: any){
    this.displayValue = JSON.stringify(value);
  }

}
