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

  ngOnInit() {
    this.documentsService.getDocuments().subscribe(data => {
      this.dataSource.data = data;
    });
    this.documentsService.getColumns().subscribe(data => {
      this.columns = data;
    });
  }

  constructor(private documentsService: DocumentService) {}
  toggleAdvancedFiltering() {
    this.advancedFilteringEnabled = !this.advancedFilteringEnabled;
  }
  storeFilterValue(filterValue: string) {
    this.filterValue = filterValue;
  }
}
