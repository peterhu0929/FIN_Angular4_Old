import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MdIconModule, MdCardModule, MdButtonModule, MdToolbarModule, MdSidenavModule, MdListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MdIconModule,
    MaterialModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
