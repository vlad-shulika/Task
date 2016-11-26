import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'tt-slider-control',
  templateUrl: './slider-control.component.html',
  //styleUrls: ['./app.component.css']
})
export class SliderControl {
  private currenIndex: number;
  
  @Output() indexItemChanged = new EventEmitter<number>();
  @Input() elementCount: number;
  @Input() interval: number = 10;
  @Input() pauseTimer: boolean = false;
  
  ngOnInit() {
    this.currenIndex = 0;
    setInterval(()=>{
      if (this.pauseTimer == false) {
        this.next();
      }
    }, this.interval*1000); 
  } 

  next() {
    if (this.currenIndex == this.elementCount - 1) {
      this.currenIndex = 0;
    } else {
      this.currenIndex = this.currenIndex + 1;
    }
    this.indexItemChanged.emit(this.currenIndex);
  }

  prev() {
    if (this.currenIndex == 0) {
      this.currenIndex = this.elementCount - 1;
    } else {
      this.currenIndex = this.currenIndex - 1;
    }
    this.indexItemChanged.emit(this.currenIndex);
  }
  
}
