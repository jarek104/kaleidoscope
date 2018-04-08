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
export class DataTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'author', 'dateCreated', 'lastModified'];
  dataSource = new MatTableDataSource<IDocument>();
  selectedRow: Number;
  setClickedRow: Function;
  documentToEdit;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private documentsService: DocumentService ) {
    this.setClickedRow = function(index, data){
      if (index === this.selectedRow) {
        this.selectedRow = -1;
        this.documentToEdit = 0;
      } else {
        this.selectedRow = index;
        this.documentToEdit = data.documentID;
      }
    };
  }

  ngOnInit() {
    this.selectedRow = -1;
    this.documentsService.getDocuments().subscribe(data => {
      this.dataSource.data = data;

    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // openRandom() {
  //   const rand = Math.floor(Math.random() * this.dataSource.data.length);
  //   window.open(this.dataSource.data[rand].Link);
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
