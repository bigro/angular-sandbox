import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormSampleComponent } from './template-form-sample.component';

describe('TemplateFormSampleComponent', () => {
  let component: TemplateFormSampleComponent;
  let fixture: ComponentFixture<TemplateFormSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
