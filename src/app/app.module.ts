import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RwSelect2Module } from "./rw-select2/rw.select2.module";


import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RwSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
