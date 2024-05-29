import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent {
  isVisible: boolean = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  close(): void {
    this.isVisible = false;
  }
}
