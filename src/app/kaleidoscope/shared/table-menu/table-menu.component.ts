import { Component, OnInit, Input } from '@angular/core';
import { RowDensityService } from '../../services/row-density.service';
import { DynamicColumnsService } from '../../services/dynamic-columns.service';
import { IColumn } from '../../models/column';
import { TableViewService } from '../../services/table-view.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss']
})
export class TableMenuComponent implements OnInit {

  @Input() isDisabled?;
  originalColumns: IColumn[] = [];
  currentlyShownColumns: IColumn[] = [];
  constructor(
    private _tableView: TableViewService,
    private _columnsService: DynamicColumnsService,
    private _densityService: RowDensityService
  ) {
  }

  ngOnInit() {
    this._tableView.selectedView$.subscribe(data => {
      if (data === 'metadata') {
        this._columnsService.metaColumns.subscribe(cols => this.currentlyShownColumns = cols);
      }
      if (data === 'keywords') {
        this._columnsService.keywordColumns.subscribe(cols => this.currentlyShownColumns = cols);

        console.log(this.currentlyShownColumns);
      }
      if (data === 'wofkflow') {
        this._columnsService.workflowColumns.subscribe(cols => this.currentlyShownColumns = cols);

        console.log(this.currentlyShownColumns);
      }
    });
  }

  changeDensity(value) {
    this._densityService.changeDensity(value);
  }
  shiftColumns() {
    this._columnsService.shiftColumns();
  }
  popAColumn(col) {
    let columns: IColumn[] = this._columnsService.columnDefinitions.value;
    columns = columns.filter(e => e !== col);
    this._columnsService.columnDefinitions.next(columns);
  }
}
