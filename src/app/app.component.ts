import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '100-Angular-challenges';

  buttonOptions = ['option1', 'option2', 'option3'];

  onSelectionChanges(selectedOption: string): void {
    console.log('Selected option', selectedOption);
  }
}
