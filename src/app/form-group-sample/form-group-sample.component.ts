import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group-sample',
  templateUrl: './form-group-sample.component.html',
  styleUrls: ['./form-group-sample.component.css']
})
export class FormGroupSampleComponent implements OnInit {

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
