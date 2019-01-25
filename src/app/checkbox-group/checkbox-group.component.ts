import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CheckboxGroup } from '../models';

interface CheckboxItem {
  option: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements OnInit, ControlValueAccessor {
  public checkboxes: CheckboxItem[] = [];

  constructor() {}

  _value: string[] = [];

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  @Input()
  public definition: CheckboxGroup;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(obj: string[]): void {
    this.value = obj || [];
    // throw new Error('Method not implemented.');
    this.checkboxes = this.definition.options.map(o => ({
      option: o,
      isChecked: this._value.includes(o)
    }));
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // nothing to do here
  }

  ngOnInit() {}

  public onCheckboxChange() {
    // update value with the checkboxes that are really checked
    this.value = this.checkboxes
      .filter(cb => cb.isChecked)
      .map(cb => cb.option);
  }
}
