import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'multi-column-multi-select',
  templateUrl: './multi-column-multi-select.component.html',
  styleUrls: ['./multi-column-multi-select.component.css'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => MultiColumnMultiSelectComponent),
       multi: true
    }
 ]
})
export class MultiColumnMultiSelectComponent implements OnInit {
  
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() columnConfig: any[] = [];
  @Input() dataList: any[] = [];

  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();

  myControl = new FormControl('');

  ngOnInit(): void {
  }

  handleOptionSelected(event: any){
    this.valueChanged.emit(event?.value);
    this.onChange(event?.value);
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
    // this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    // this.selectedItem = value;
  }

}
