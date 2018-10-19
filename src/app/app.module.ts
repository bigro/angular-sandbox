import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ReactiveFormSampleComponent} from "./reactive-form-sample/reactive-form-sample.component";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormSampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
