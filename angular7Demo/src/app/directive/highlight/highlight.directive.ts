import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

 

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  // @Input() highlightColor: string;
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'blue');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
