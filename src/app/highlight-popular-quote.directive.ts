import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlightPopularQuote]'
})
export class HighlightPopularQuoteDirective {
  elem: any;

  constructor() { 
    this.elem.nativeElement.style.backgroundColor = '#f9c128';
  }

}
