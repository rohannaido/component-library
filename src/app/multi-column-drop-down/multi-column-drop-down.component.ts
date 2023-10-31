import { Component, Input, Output, OnInit, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'multi-column-drop-down',
  templateUrl: './multi-column-drop-down.component.html',
  styleUrls: ['./multi-column-drop-down.component.css'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => MultiColumnDropDownComponent),
       multi: true
    }
 ]
})
export class MultiColumnDropDownComponent implements OnInit, ControlValueAccessor {
  
  @Input() columnConfig: any[] = [];
  @Input() dataList: any[] = [];

  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  disabled: boolean = false;

  filteredDropDownList: any[] = [];

  selectedItem: any;
  selectedItemDisplay: any;
  displayKey: string | undefined;
  showDataPanel: boolean = false;

  constructor(){
  }

  ngOnInit(){
    this.columnConfig.forEach((columnItem: any) => {
      if(columnItem.displayItem === true){
        this.displayKey = columnItem.bindKey;
        return;
      }
    })

    //Search string
    this.dataList.forEach((dataItem) => {
      dataItem.searchString = Object.values(dataItem).join('');
    })

    
    this.filteredDropDownList = this.dataList;

  }
  
  handleInputClick(){
    this.showDataPanel = true;
  }

  handleInputType(){
    this.filterDropDownData(this.selectedItemDisplay);
  }

  filterDropDownData(searchInput: string){
    this.filteredDropDownList = searchInput ? this.dataList.filter((dataItem) => dataItem.searchString.toLowerCase().includes(searchInput)) : this.dataList;
  }

  handleDataItemClick(dataItem: any) {
    this.showDataPanel = false;
    this.selectedItem = dataItem;
    
    this.valueChanged.emit(this.selectedItem);
    this.onChange(this.selectedItem);

    if(this.displayKey){
      this.selectedItemDisplay = dataItem[this.displayKey];
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.selectedItem = value;
  }

}
