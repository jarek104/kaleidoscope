import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs/Subscription';
import { DocumentService } from '../services/document.service';
import { IDocument } from '../../models/document';
import { ObservableMedia } from '@angular/flex-layout';
import { map } from 'rxjs/operators';
import { TableViewService } from '../services/table-view.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit  {
  advancedFilteringEnabled = false;
  filterValue = '';
  dataSource = new MatTableDataSource<IDocument>();
  columns;
  currentView: string;
  numberOfSelectedItems: number;
  selectedRowsData: IDocument[];

  constructor(
    private documentsService: DocumentService,
    private observableMedia: ObservableMedia,
    private viewService: TableViewService
  ) {}

  ngOnInit() {
    this.documentsService.getDocuments().subscribe(data => {
      this.dataSource.data = data;
    });
    this.documentsService.getColumns().subscribe(data => {
      this.columns = data;
    });
    this.viewService.selectedView$.subscribe(view =>
    this.currentView = view);
  }

  toggleAdvancedFiltering() {
    this.advancedFilteringEnabled = !this.advancedFilteringEnabled;
  }

  storeFilterValue(filterValue: string) {
    this.filterValue = filterValue;
  }
  updateSelectedRowCount(count: any) {
    this.numberOfSelectedItems = count;
  }

}
