import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateLectureComponent } from './ngtemplate-lecture.component';

describe('NgtemplateLectureComponent', () => {
  let component: NgtemplateLectureComponent;
  let fixture: ComponentFixture<NgtemplateLectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtemplateLectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
