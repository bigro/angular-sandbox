import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReactiveFormSampleComponent} from "./reactive-form-sample/reactive-form-sample.component";
import {TemplateFormSampleComponent} from './template-form-sample/template-form-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormSampleComponent,
    TemplateFormSampleComponent
  ],
  imports: [
    BrowserModule,
    // formControlとかのリアクティブなフォームを使うにはインポートが必要らしい
    ReactiveFormsModule,
    // テンプレート駆動フォームを使用するためにはインポートが必要らしい
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
