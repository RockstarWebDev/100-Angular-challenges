import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent {
  @Input() items: string[] = [];
  searchTerm: string = ' ';
  searchControl: FormControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.searchTerm = value;
      });
  }
}
