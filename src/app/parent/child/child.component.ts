import { Component, OnInit, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ContentChild('c2')
  c2;

  public item: string;

  constructor() { }

  ngOnInit() {
    this.item = 'Item';
  }

  ngAfterViewInit() {
    console.log(this.c2);
  }

}
