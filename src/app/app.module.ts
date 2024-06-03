import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterTermPipe } from './filter-term.pipe';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [AppComponent, FilterTermPipe, SearchListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
