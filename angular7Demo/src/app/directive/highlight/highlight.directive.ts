import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  
  constructor(private el: ElementRef) {
  }

  // @Input() highlightColor: string;
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.highlightColor || 'blue');
    this.highlight(this.highlightColor || 'blue');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor||'yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor||'yellow';
  }


}
