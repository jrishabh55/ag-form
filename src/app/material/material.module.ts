import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatFormFieldControl,
} from '@angular/material';

const materialComponentModules = [
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
];


@NgModule({
  declarations: [],
  exports: [...materialComponentModules],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // ...materialComponentModules
  ]
})
export class MaterialModule { }
