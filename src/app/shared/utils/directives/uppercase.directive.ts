import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
 selector: '[uppercase]'
})
export class UpperCaseDirective {

    constructor(private control: NgControl) { }

  @HostListener('input', ['$event.target']) onInput(input: HTMLInputElement): void {
    const posicaoCaracter = input.selectionStart ? input.selectionStart : 0;
    this.control.control?.setValue(input.value.toUpperCase());
    input.setSelectionRange(posicaoCaracter, posicaoCaracter);
  }

}