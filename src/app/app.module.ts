import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CustomTextareaComponent } from './custom-textarea/custom-textarea.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxGroupComponent,
    CustomTextareaComponent,
    DynamicCardComponent,
    RadioGroupComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
