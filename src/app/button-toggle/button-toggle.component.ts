import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
})
export class ButtonToggleComponent {
  @Input() options: string[] = [];
  @Output() selectionChange = new EventEmitter<string>();
  selectedOption: string | null = null;

  onSelect(option: string): void {
    this.selectedOption = option;
    this.selectionChange.emit(this.selectedOption);
  }
}
