export interface CardAnswer {
  widgetId: string;
  widgetType: WidgetType;
  value: string[];
}

export interface CardDefinition {
  widgets: Widget[];
}

export enum WidgetType {
  Checkbox = 'checkbox',
  Textarea = 'textarea'
}
export type Widget = CheckboxGroup | CustomTextarea;

export interface CheckboxGroup {
  type: 'checkbox';
  maxSelection?: number;
  id: string;
  options: string[];
}

export interface CustomTextarea {
  type: 'textarea';
  id: string;
}
