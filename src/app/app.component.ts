import { Component } from '@angular/core';
import { accordianContent } from './accordion/accordion-content.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '100-Angular-challenges';

  accordianContents: accordianContent[] = [
    { title: 'section 1', content: 'content of section 1', isOpen: false },
    { title: 'section 2', content: 'content of section 2', isOpen: false },
    { title: 'section 3', content: 'content of section 3', isOpen: false },
  ];
}
