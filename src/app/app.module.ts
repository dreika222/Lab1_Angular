import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { DateComponent } from './date/date.component';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { CutStringPipe } from './pipes/cut-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    DateComponent,
    CityComponent,
    AddCityComponent,
    CutStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
