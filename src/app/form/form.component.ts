import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  isLinear = false;
  stepOneFromGroup: FormGroup;
  stepTwoFormGroup: FormGroup;
  rowHeight = '41px';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stepOneFromGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.stepTwoFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
