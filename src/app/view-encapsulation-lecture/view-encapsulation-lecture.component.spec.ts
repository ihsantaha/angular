import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationLectureComponent } from './view-encapsulation-lecture.component';

describe('ViewEncapsulationLectureComponent', () => {
  let component: ViewEncapsulationLectureComponent;
  let fixture: ComponentFixture<ViewEncapsulationLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
