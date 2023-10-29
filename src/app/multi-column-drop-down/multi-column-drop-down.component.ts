import { Component, Input } from '@angular/core';

@Component({
  selector: 'multi-column-drop-down',
  templateUrl: './multi-column-drop-down.component.html',
  styleUrls: ['./multi-column-drop-down.component.css']
})
export class MultiColumnDropDownComponent {
  
  @Input() columnConfig: any[] = [];
  @Input() dataList: any[] = [];

  selectedItemDisplay: any;
  displayKey: string | undefined;
  showDataPanel: boolean = false;

  constructor(){
    this.columnConfig.forEach((columnItem: any) => {
      if(columnItem.displayItem === true){
        this.displayKey = columnItem.bindKey;
        return;
      }
    })
  }

  
  handleInputClick(){
    this.showDataPanel = true;
  }

  handleDataItemClick(dataItem: any) {
    this.showDataPanel = false;
    if(this.displayKey){
      this.selectedItemDisplay = dataItem[this.displayKey];
    }
  }

}
