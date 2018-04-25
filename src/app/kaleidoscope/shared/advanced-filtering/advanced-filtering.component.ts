import { Component, OnInit, Input } from '@angular/core';
import { FilteringService } from '../../services/filtering.service';
import { IColumn } from '../../models/column';
import { TableViewService } from '../../services/table-view.service';
import { DynamicColumnsService } from '../../services/dynamic-columns.service';

@Component({
  selector: 'app-advanced-filtering',
  templateUrl: './advanced-filtering.component.html',
  styleUrls: ['./advanced-filtering.component.scss']
})
export class AdvancedFilteringComponent implements OnInit {

  currentlyShownColumns: IColumn[] = [];
  constructor(
    private _filteringService: FilteringService,
    private _tableView: TableViewService,
    private _columnsService: DynamicColumnsService
  ) { }

  ngOnInit() {
    this._tableView.selectedView$.subscribe(data => {
      if (data === 'metadata') {
        this._columnsService.metaColumns.subscribe(cols => this.currentlyShownColumns = cols);
      }
      if (data === 'keywords') {
        this._columnsService.keywordColumns.subscribe(cols => this.currentlyShownColumns = cols);
      }
      if (data === 'wofkflow') {
        this._columnsService.workflowColumns.subscribe(cols => this.currentlyShownColumns = cols);
      }
    });
  }

  applyFilter(filterValue: string) {
    this._filteringService.applyFilter(filterValue);
  }
}
