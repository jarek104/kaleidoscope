import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSidenav } from '@angular/material';
import { IDocument } from './models/document';
import { FilteringService } from './services/filtering.service';
import { DataControllerService } from './services/data-controller.service';
import { TableViewService } from './services/table-view.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IColumn } from './models/column';
import { DynamicColumnsService } from './services/dynamic-columns.service';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'kaleidoscope',
  templateUrl: './kaleidoscope.component.html',
  styleUrls: ['./kaleidoscope.component.scss']
})
export class KaleidoscopeComponent implements OnInit  {
  advancedFilteringEnabled = false;
  filterValue = '';
  currentView: string;

  @Input() private dataSource = new BehaviorSubject<IDocument[]>([]);
  @Input() private columnDefinitions = new BehaviorSubject<IColumn[]>([]);
  @Input() private preselectedItemIds = [72086, 84830, 51577];

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  preselectedDocuments: IDocument[] = [];

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor(
    private _filteringService: FilteringService,
    private _dataControllerService: DataControllerService,
    private _viewService: TableViewService,
    private _columnService: DynamicColumnsService
  ) {}

  ngOnInit() {

    this.dataSource.subscribe(data => {
      this._dataControllerService.dataSource.data = data;
      this._dataControllerService._initialSelection = data.filter(val => this.preselectedItemIds.includes(val.id ));
    });

    this._viewService.selectedView$.subscribe(view =>
      this.currentView = view
    );

    this.columnDefinitions.subscribe(values => {
      this._columnService.columnDefinitions.next(values);
    });



  }

  toggleAdvancedFiltering() {
    this.advancedFilteringEnabled = !this.advancedFilteringEnabled;
  }

  applyFilter(filterValue: string) {
    this._filteringService.applyFilter(filterValue);
  }
}
