import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';

const materialComponentModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
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
