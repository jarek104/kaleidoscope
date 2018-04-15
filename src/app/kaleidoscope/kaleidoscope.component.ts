import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from './models/document';
import { FilteringService } from './services/filtering.service';
import { DataControllerService } from './services/data-controller.service';
import { TableViewService } from './services/table-view.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kaleidoscope',
  templateUrl: './kaleidoscope.component.html',
  styleUrls: ['./kaleidoscope.component.scss']
})
export class KaleidoscopeComponent implements OnInit  {
  advancedFilteringEnabled = false;
  filterValue = '';
  @Input() private dataSource = new MatTableDataSource<IDocument>();
  currentView: string;

  constructor(
    private _filteringService: FilteringService,
    private _dataControllerService: DataControllerService,
    private _viewService: TableViewService
  ) {}

  ngOnInit() {
    this._dataControllerService.dataSource = this.dataSource;
    this._viewService.selectedView$.subscribe(view =>
      this.currentView = view
    );
  }

  toggleAdvancedFiltering() {
    this.advancedFilteringEnabled = !this.advancedFilteringEnabled;
  }

  applyFilter(filterValue: string) {
    this._filteringService.applyFilter(filterValue);
  }
}
