import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SliderItem } from './slider-item.component';
import { SliderControl } from './slider-control.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderItem,
    SliderControl
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
