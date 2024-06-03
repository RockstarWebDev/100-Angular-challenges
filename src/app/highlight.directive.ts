import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.Highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.Highlight(null);
  }

  private Highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
