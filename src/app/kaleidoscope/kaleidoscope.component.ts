import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';
import { IDocument } from './models/document';
import { TableViewService } from './services/table-view.service';
import { DataControllerService } from './services/data-controller.service';
import { FilteringService } from './services/filtering.service';

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
  numberOfSelectedItems: number;
  selectedRowsData: IDocument[];

  constructor(
    private _filteringService: FilteringService,
    private dataControllerService: DataControllerService,
    private viewService: TableViewService
  ) {}

  ngOnInit() {
    this.dataControllerService.dataSource = this.dataSource;
    this.viewService.selectedView$.subscribe(view =>
    this.currentView = view);
  }

  toggleAdvancedFiltering() {
    this.advancedFilteringEnabled = !this.advancedFilteringEnabled;
  }

  applyFilter(filterValue: string) {
    this._filteringService.applyFilter(filterValue);
  }

  updateSelectedRowCount(count: any) {
    this.numberOfSelectedItems = count;
  }

}
