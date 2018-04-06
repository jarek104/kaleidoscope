
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
})
export class SharedModule {}
