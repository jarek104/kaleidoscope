import { Component, OnInit, Input } from '@angular/core';
import { RowDensityService } from '../../services/row-density.service';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss']
})
export class TableMenuComponent implements OnInit {

  @Input() isDisabled?;
  constructor(private _densityService: RowDensityService) { }

  ngOnInit() {
  }

  changeDensity(value) {
    this._densityService.changeDensity(value);
  }
}
