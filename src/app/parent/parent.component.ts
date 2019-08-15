import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from 'src/app/parent/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  public header: string;
  public toggleTemplateData: boolean;

  @ViewChild('paragraphElement')
  parElem;

  // @ViewChild(ChildComponent, {read: ElementRef})
  // child: ChildComponent;
  @ViewChild(ChildComponent)
  child: ChildComponent;

  @ViewChildren(ChildComponent)
  children

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.header = 'Parent';
    console.log(this.parElem.nativeElement.innerHTML);
  }

  // Earliest life cycle hook required for the code within to work
  ngAfterViewInit() {
    this.child.item = 'Modified Item';
    console.log(this.child);
    console.log(this.children);
    this.cdr.detectChanges();
  }

  onToggleTemplateData() {
    this.toggleTemplateData = !this.toggleTemplateData;
  }

}
