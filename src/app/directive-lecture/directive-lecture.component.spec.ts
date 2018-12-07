import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveLectureComponent } from './directive-lecture.component';

describe('DirectiveLectureComponent', () => {
  let component: DirectiveLectureComponent;
  let fixture: ComponentFixture<DirectiveLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
