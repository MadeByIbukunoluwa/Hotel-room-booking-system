import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  // @Input() color:string = 'red'
  @Input() hinvHover:string = 'red'

  // constructor(private element : ElementRef,@Inject(DOCUMENT) private document:Document) {
  constructor(private element : ElementRef, private renderer:Renderer2 ) {
    console.log(this.element) 
   }
// THink of the document as a wrapper around all the dom manipulation methods, eg getElmentById , getElementByClassName, etc 
  ngOnInit(): void {
    //  this.element.nativeElement.style.backgroundColor = this.color 
    //  this.document.querySelector()
    this.renderer.setStyle(
      this.element.nativeElement,'backgroundColor',this.hinvHover
    )
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
    this.element.nativeElement,'backgroundColor','green'
  )
   }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
    this.element.nativeElement,'backgroundColor','white'
  )
  }
}
