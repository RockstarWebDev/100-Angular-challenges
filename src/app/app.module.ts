import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PillFiltersComponent } from './pill-filters/pill-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    PillFiltersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
