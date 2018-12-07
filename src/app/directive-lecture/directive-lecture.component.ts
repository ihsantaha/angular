import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-lecture',
  templateUrl: './directive-lecture.component.html',
  styleUrls: ['./directive-lecture.component.css']
})
export class DirectiveLectureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToggleDisableValue(disableValue:boolean) {
    console.log(`Cuurent Disable Value: ${disableValue}`);
  }

}
