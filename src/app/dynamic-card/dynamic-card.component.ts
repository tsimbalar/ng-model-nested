import {
  Component,
  OnInit,
  Input,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { __values } from 'tslib';
import { Widget, CardDefinition, CardAnswer, WidgetType } from '../models';

interface WidgetItem {
  widget: Widget;
  answer: string[];
}

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicCardComponent),
      multi: true
    }
  ]
})
export class DynamicCardComponent
  implements OnInit, OnChanges, ControlValueAccessor {
  constructor() {}

  @Input()
  public card: CardDefinition;

  public widgetItems: WidgetItem[] = [];

  private _value: CardAnswer[] = [];

  private onChange = (_: any) => {};
  private onTouched = () => {};

  get value(): CardAnswer[] {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  // ControlValueAccessor implementation
  writeValue(obj: CardAnswer[]): void {
    // validate and update internal state
    this.value = obj || [];
    this.widgetItems = this.card.widgets.map(w => ({
      widget: w,
      answer:
        this._value
          .filter(
            answer => answer.widgetId === w.id && answer.widgetType === w.type
          )
          .map(a => a.value)
          .find(_ => true) || []
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
  // end of ControlValueAccesor implementation

  public onWidgetChange() {
    this.value = this.widgetItems.map(item => ({
      widgetId: item.widget.id,
      widgetType: item.widget.type as WidgetType,
      value: item.answer
    }));
  }
}
