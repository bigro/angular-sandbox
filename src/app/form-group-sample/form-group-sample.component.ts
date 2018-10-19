import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-group-sample',
  templateUrl: './form-group-sample.component.html',
  styleUrls: ['./form-group-sample.component.css']
})
export class FormGroupSampleComponent implements OnInit {

  // FormControlでリアクティブなフォームを作れる
  // コンストラクタに初期値を入れれる
  name = new FormControl('Hoge');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
