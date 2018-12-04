import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgtemplateLectureComponent } from './ngtemplate-lecture/ngtemplate-lecture.component';
import { ChildComponent } from './ngtemplate-lecture/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NgtemplateLectureComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
