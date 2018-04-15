import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewService } from './services/table-view.service';
import { DataControllerService } from './services/data-controller.service';
import { FilteringService } from './services/filtering.service';
import { RowDensityService } from './services/row-density.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TableViewService,
    DataControllerService,
    FilteringService,
    RowDensityService
  ]
})
export class KaleidoscopeModule { }
