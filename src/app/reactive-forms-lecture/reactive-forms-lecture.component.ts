import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { customValidator } from '../validators';

@Component({
  selector: 'app-reactive-forms-lecture',
  templateUrl: './reactive-forms-lecture.component.html',
  styleUrls: ['./reactive-forms-lecture.component.css']
})
export class ReactiveFormsLectureComponent implements OnInit {

  myForm: FormGroup;

  // constructor() {
  //   this.myForm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email])
  //   });
  //  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', customValidator],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
  }
}
