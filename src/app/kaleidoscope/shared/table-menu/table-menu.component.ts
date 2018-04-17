import { Component, OnInit, Input } from '@angular/core';
import { RowDensityService } from '../../services/row-density.service';
import { DynamicColumnsService } from '../../services/dynamic-columns.service';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss']
})
export class TableMenuComponent {

  @Input() isDisabled?;
  constructor(
    private _columnsService: DynamicColumnsService,
    private _densityService: RowDensityService
  ) { }

  changeDensity(value) {
    this._densityService.changeDensity(value);
  }
  shiftColumns() {
    this._columnsService.shiftColumns();
  }
}
