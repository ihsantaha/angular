import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsLectureComponent } from './reactive-forms-lecture.component';

describe('ReactiveFormsLectureComponent', () => {
  let component: ReactiveFormsLectureComponent;
  let fixture: ComponentFixture<ReactiveFormsLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
