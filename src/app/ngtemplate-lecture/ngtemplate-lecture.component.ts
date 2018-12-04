import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate-lecture',
  templateUrl: './ngtemplate-lecture.component.html',
  styleUrls: ['./ngtemplate-lecture.component.css']
})
export class NgtemplateLectureComponent implements OnInit {

  parentItem: string = 'Parent Item';

  constructor() { }

  ngOnInit() {
  }

}
