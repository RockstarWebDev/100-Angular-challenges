import { Component, Input } from '@angular/core';
import { accordianContent } from './accordion-content.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() contents: accordianContent[] = [];

  toggleAccordion(index: number): void {
    this.contents[index].isOpen = !this.contents[index].isOpen;
  }
}
