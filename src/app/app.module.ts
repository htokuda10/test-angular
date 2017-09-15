import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdditionalProjectInfoComponent } from './additional-project-info/additional-project-info.component';
import { ButtonComponent } from './button/button.component';
import { ConsumerInfoCardComponent } from './consumer-info-card/consumer-info-card.component';
import { RadioButton2Component } from './radio-button2/radio-button2.component';
import { SearchConsumerComponent } from './search-consumer/search-consumer.component';
import { SelectListComponent } from './select-list/select-list.component';
import { ServiceProfessionalInfoCardComponent } from './service-professional-info-card/service-professional-info-card.component';
import { Table3SelectableComponent } from './table3-selectable/table3-selectable.component';
import { Table4SelectableComponent } from './table4-selectable/table4-selectable.component';
import { Table5SelectableComponent } from './table5-selectable/table5-selectable.component';
import { TextInputFieldComponent } from './text-input-field/text-input-field.component';
import { UpDownToggleComponent } from './up-down-toggle/up-down-toggle.component';
import { ServiceRequestComponent } from './service-request/service-request.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionalProjectInfoComponent,
    ButtonComponent,
    ConsumerInfoCardComponent,
    RadioButton2Component,
    SearchConsumerComponent,
    SelectListComponent,
    ServiceProfessionalInfoCardComponent,
    Table3SelectableComponent,
    Table4SelectableComponent,
    Table5SelectableComponent,
    TextInputFieldComponent,
    UpDownToggleComponent,
    ServiceRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
