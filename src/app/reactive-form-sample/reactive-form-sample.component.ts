import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.css']
})
export class ReactiveFormSampleComponent implements OnInit {

  // FormControlでリアクティブなフォームを作れる
  // コンストラクタに初期値を入れれる
  // FormGroupで複数のフォームを管理できる
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: EventEmitterというのを使うと外に出せるらしい
    console.warn(this.profileForm.value);
  }
}
