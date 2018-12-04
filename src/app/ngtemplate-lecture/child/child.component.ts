import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childItem: string = 'Child Item';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  @Input()
  alternativeParentTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
