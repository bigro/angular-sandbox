import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSampleComponent } from './form-group-sample.component';

describe('ReactiveFormSampleComponent', () => {
  let component: ReactiveFormSampleComponent;
  let fixture: ComponentFixture<ReactiveFormSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
