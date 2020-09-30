import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};
  @HostBinding('style.color') elColor = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event.target']) onClick(e: Event) {
    console.log(e);
  }
  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
  }
}
