import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgtemplateLectureComponent } from './ngtemplate-lecture/ngtemplate-lecture.component';
import { ChildComponent } from './ngtemplate-lecture/child/child.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { DirectiveLectureComponent } from './directive-lecture/directive-lecture.component';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { ViewEncapsulationLectureComponent } from './view-encapsulation-lecture/view-encapsulation-lecture.component';
import { ReactiveFormsLectureComponent } from './reactive-forms-lecture/reactive-forms-lecture.component';


@NgModule({
  declarations: [
    AppComponent,
    NgtemplateLectureComponent,
    ChildComponent,
    HighlightedDirective,
    DirectiveLectureComponent,
    NgxUnlessDirective,
    ViewEncapsulationLectureComponent,
    ReactiveFormsLectureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
