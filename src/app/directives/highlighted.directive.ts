import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('disable')
  disableValue = false;

  @Output()
  toggleDisableValue = new EventEmitter();

  constructor() { }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClass() {
    return true;
  }

  @HostBinding('style.border')
  get cssStyle() {
    return 'solid 1px red';
  }

  // @HostBinding('attr.disabled')
  // get attrDisabled() {
  //   console.log(this.disableValue);
  //   return this.disableValue;
  // }

  @HostListener('click', ['$event'])
  clickMe($event) {
    console.log($event);
    this.disableValue = !this.disableValue;
    this.toggleDisableValue.emit(this.disableValue);
  }

  onToggleDoubleClick() {
    console.log('Hello');
  }

}
