import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AutoFocusDirective } from './auto-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    AutoFocusDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
