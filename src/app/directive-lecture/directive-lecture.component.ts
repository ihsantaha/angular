import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-lecture',
  templateUrl: './directive-lecture.component.html',
  styleUrls: ['./directive-lecture.component.css']
})
export class DirectiveLectureComponent implements OnInit {

  item: string = 'Item';
  
  constructor() { }

  ngOnInit() {
  }

  onToggleDisableValue(disableValue:boolean) {
    console.log(`Current Disable Value: ${disableValue}`);
  }

}
