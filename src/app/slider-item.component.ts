import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { ModelSliderItem } from './slider-item.model';

@Component({
  selector: 'tt-slider-item',
  templateUrl: './slider-item.component.html',
  styles: [`
  .image-container {     
    position: relative;     
    width: 200px;     
    height: 300px; } 
  .image-container .caption {     
      position: absolute;     
      top: 0;     
      left: 0;     
      width: 100%;     
      height: 100%;     
      display: block;     
    color: #FFF; }
  .image-container .small-image {     
      position: absolute;     
      bottom: 0;     
      right: 0;     
      width: 30%;     
      height: 30%;     
      display: block;     
    color: #FFF;  }
  .image-container .full-image {     
      position: absolute;     
      bottom: 0;     
      right: 0;     
      width: 100%;     
      height: 100%;     
      display: block;     
    color: #FFF;  }
  `]
})
export class SliderItem implements OnInit{
  styleObj: {};
  @Input() sliderItem: ModelSliderItem;
  constructor() {
            
  }
  ngOnInit() {
    this.styleObj = {'background-image': this.sliderItem.hero};
  }

  @Output() mouseOn = new EventEmitter<boolean>(); 

  @HostListener('mouseenter') onMouseOver() {
    this.mouseOn.emit(true);
  }

  @HostListener('mouseleave') onMouseExit() {
    this.mouseOn.emit(false);
  }
}
