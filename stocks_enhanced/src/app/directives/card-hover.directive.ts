import { AfterViewInit, Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements 
  // 1. changes colors from card-hover right away
  //AfterViewInit,
  OnInit
  {

  card: any;

  constructor(private el: ElementRef) { }
  
  // 1. changes colors from card-hover right away
  // ngAfterViewInit(): void {
  //   this.card = this.el.nativeElement.querySelector('.mdl-card');
  //   if(this.card.classList.contains('increase')) {
  //     this.card.style.backgroundColor = 'rgb(63,81,181)';
  //   } else if(this.card.classList.contains('decrease')) {
  //     this.card.style.backgroundColor = 'rgb(255,171,64)';
  //   } else {
  //     this.card.style.backgroundColor = '';
  //   }
  // }

  // 2. changes colors from card-hover after mouse position
  ngOnInit(): void {
    this.card = this.el.nativeElement.querySelector('.mdl-card');
  }

  changeColor(reverseBack: boolean) {
    
    if(this.card.classList.contains('increase')) {
      this.card.style.backgroundColor = reverseBack? 'rgb(85,139,47)' :'rgb(63,81,181)';
    } else if(this.card.classList.contains('decrease')) {
      this.card.style.backgroundColor = reverseBack? 'rgb(198,40,40)':'rgb(255,171,64)';
    } else {
      this.card.style.backgroundColor = '';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.card.style.boxShadow = '2px 2px 1px #999';
    this.card.style.top = '-2px';
    this.changeColor(false);
  }

  
  @HostListener('mouseout') onMouseOut() {
    this.card.style.boxShadow = '';
    this.card.style.top = ''; 
    this.changeColor(true);
  }

}
