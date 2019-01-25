import { Component } from '@angular/core';
import {
  CardAnswer,
  WidgetType,
  CardDefinition
} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sandbox-ngmodel';

  public card: CardDefinition = {
    widgets: [
      {
        type: 'checkbox',
        id: 'checkbox1',
        options: ['option 1', 'option 2', 'option 3', 'option 4']
      },
      {
        type: 'textarea',
        id: 'textarea1',
      },
      {
        type: 'checkbox',
        id: 'checkbox2',
        options: ['Foo', 'Bar', 'Qux']
      },
      {
        type: 'textarea',
        id: 'textarea2',
      },
    ]
  };

  public cardAnswers: CardAnswer[] = [
    {
      widgetId: 'checkbox1',
      widgetType: WidgetType.Checkbox,
      value: ['option 2', 'option 4']
    },
    {
      widgetId: 'textarea1',
      widgetType: WidgetType.Textarea,
      value: ['content of textarea1']
    },
    {
      widgetId: 'checkbox2',
      widgetType: WidgetType.Checkbox,
      value: ['Qux']
    },
    {
      widgetId: 'textarea2',
      widgetType: WidgetType.Textarea,
      value: ['content of textarea2']
    },
  ];
}
