import { Component, OnInit } from '@angular/core';
import {Hero} from "../model/hero";

@Component({
  selector: 'app-template-form-sample',
  templateUrl: './template-form-sample.component.html',
  styleUrls: ['./template-form-sample.component.css']
})
export class TemplateFormSampleComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit(): void {
  }

}
