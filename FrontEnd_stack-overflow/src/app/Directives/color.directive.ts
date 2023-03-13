import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appColor]',
  standalone: true,
  inputs: ['color']
})
export class ColorDirective implements OnChanges{
  @Input() appColor!: string;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appColor) {
      this.el.nativeElement.style.color = this.appColor;
    }
  }
}
