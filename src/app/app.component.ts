import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '100-Angular-challenges';

  labels: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  selectedFilter: string[] = [];

  onFilterSelected(label: string): void {
    if (this.selectedFilter.includes(label)) {
      this.selectedFilter = this.selectedFilter.filter((f) => f !== label);
    } else {
      this.selectedFilter.push(label);
    }
    console.log('Selected pill', this.selectedFilter);
  }
}
