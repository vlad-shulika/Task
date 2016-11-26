import { Component, OnInit, Input } from '@angular/core';
import { ModelSliderItem } from './slider-item.model';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() indexItem : number;
  title = 'tt works!';
  currentItem: ModelSliderItem;
  sliderItems: Array<ModelSliderItem> = new Array<ModelSliderItem>(
    {
      hero:"https://placeimg.com/640/480/animals",
      text:"Animals are here.",
      image:"https://placeimg.com/150/150/animals/sepia"
    },
    {
      hero:"https://placeimg.com/640/480/people",
      text:"People are here.",
      image:"https://placeimg.com/150/150/people/sepia"
    },
    {
      hero:"https://placeimg.com/640/480/tech",
      text:"Tech is here.",
      image:"https://placeimg.com/150/150/tech/sepia"
    });

  ngOnInit() {
    this.currentItem = this.sliderItems[0];
  }

  onIndexChanged(newIndex: number) {
    this.currentItem = this.sliderItems[newIndex];
  }

  itemPause = false;
}
