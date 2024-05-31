import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.css'],
})
export class PillFiltersComponent {
  @Input() labels: string[] = [];
  @Output() filterSelected = new EventEmitter<string>();

  selectedFilters: Set<string> = new Set();

  onPillClick(label: string): void {
    if (this.selectedFilters.has(label)) {
      this.selectedFilters.delete(label);
    } else {
      this.selectedFilters.add(label);
    }
    this.filterSelected.emit(label);
  }

  isSelected(label: string): boolean {
    return this.selectedFilters.has(label);
  }
}
