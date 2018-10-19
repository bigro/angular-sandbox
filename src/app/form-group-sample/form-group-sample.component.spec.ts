import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupSampleComponent } from './form-group-sample.component';

describe('FormGroupSampleComponent', () => {
  let component: FormGroupSampleComponent;
  let fixture: ComponentFixture<FormGroupSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
