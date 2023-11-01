import { Component, Input, Output, OnInit, EventEmitter, OnChanges, forwardRef } from '@angular/core';

import {FormControl, NG_VALUE_ACCESSOR, } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';


@Component({
  selector: 'multi-column-drop-down-material',
  templateUrl: './multi-column-drop-down-material.component.html',
  styleUrls: ['./multi-column-drop-down-material.component.css'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => MultiColumnDropDownMaterialComponent),
       multi: true
    }
 ]
})
export class MultiColumnDropDownMaterialComponent implements OnInit, OnChanges {

  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() columnConfig: any[] = [];
  @Input() dataList: any[] = [];

  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  disabled: boolean = false;
  
  myControl = new FormControl<string | any>('');

  selectedItem: any;
  selectedItemDisplay: any;

  displayKey: string = "";

  // filteredDropDownList: any[] = [];
  filteredDropDownList: Observable<any[]> | undefined;


  ngOnInit(){
    
    this.displayKey = this.columnConfig.find((columnItem: any) => (columnItem.displayItem === true) )?.bindKey;

    this.dataList = this.dataList.map((columnItem: any) => 
      ({ ...columnItem, 
        searchString: Object.values(columnItem).join(''), 
        displayValue: columnItem[this.displayKey] 
      }) );
    
    // this.filteredDropDownList = this.dataList;

    this.filteredDropDownList = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.dataList.slice();
      }),
    );
  }

  ngOnChanges(){
  }


  displayFn(selectedObject: any): string {
    return selectedObject && selectedObject.displayValue ? selectedObject.displayValue : '';
  }

  private _filter(searchInput: string): any[] {
    const filterValue = searchInput.toLowerCase();

    return this.dataList.filter((dataItem) => dataItem.searchString.toLowerCase().includes(filterValue)) || this.dataList;;
  }

  handleOptionSelected(event: any){
    this.valueChanged.emit(event?.option?.value);
    this.onChange(event?.option?.value);
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
