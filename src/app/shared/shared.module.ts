import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    /* Custom material module for trimmed imports */
    MaterialModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
