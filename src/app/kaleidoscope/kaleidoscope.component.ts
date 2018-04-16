import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from './models/document';
import { FilteringService } from './services/filtering.service';
import { DataControllerService } from './services/data-controller.service';
import { TableViewService } from './services/table-view.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IColumn } from './models/column';
import { DynamicColumnsService } from './services/dynamic-columns.service';
import { DocumentProviderService } from '../app-services/document-provider.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kaleidoscope',
  templateUrl: './kaleidoscope.component.html',
  styleUrls: ['./kaleidoscope.component.scss']
})
export class KaleidoscopeComponent implements OnInit, OnChanges  {
  advancedFilteringEnabled = false;
  filterValue = '';
  currentView: string;

  @Input() dataSource = new MatTableDataSource<IDocument>();
  @Input() columnDefinitions: IColumn[] = [];

  constructor(
    private _filteringService: FilteringService,
    private _dataControllerService: DataControllerService,
    private _viewService: TableViewService,
    private _columnService: DynamicColumnsService,
    private dps: DocumentProviderService
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
  ngOnChanges() {
    this._columnService.columnDefinitions.next(this.columnDefinitions);
  }
}
