import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    DataSetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
})
export class DataSetModule { }
