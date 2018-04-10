import { Component, OnInit, AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { IDocument } from '../../models/document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-metadata-table',
  templateUrl: './metadata-table.component.html',
  styleUrls: ['./metadata-table.component.scss']
})
export class MetadataTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['id', 'name', 'author', 'dateCreated', 'lastModified'];
  @Input() dataSource = new MatTableDataSource<IDocument>();
  selectedRow: Number;
  setClickedRow: Function;
  documentToEdit;
  @Input() filterValue = '';

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
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
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnChanges() {
    this.applyFilter(this.filterValue);
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
