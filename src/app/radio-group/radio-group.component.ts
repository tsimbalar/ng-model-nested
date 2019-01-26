import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CheckboxGroup } from '../models';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  _value: string[] = [];
  public selected: string;

  @Input()
  public definition: CheckboxGroup;
  ngOnInit(): void {}

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(obj: string[]): void {
    this.value = obj || [];

    if (this.value.length > 0) {
      this.selected = this.value[0];
    }
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

  public onRadioChange() {
    // update value with the radiobutton that is really checked
    if (this.selected) {
      this.value = [this.selected];
    } else {
      this.value = [];
    }
  }
}
