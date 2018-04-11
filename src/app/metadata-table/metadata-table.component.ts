import { Component, OnInit, AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IDocument } from '../../models/document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-metadata-table',
  templateUrl: './metadata-table.component.html',
  styleUrls: ['./metadata-table.component.scss']
})
export class MetadataTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['id', 'name', 'author', 'dateCreated', 'lastModified', 'actions'];
  @Input() dataSource = new MatTableDataSource<IDocument>();
  selectedRow: Number;
  setSelectedRow: Function;
  documentToEdit;
  showButtons: Boolean = false;
  @Input() filterValue = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.setSelectedRow = function(index, data){
      if (index === this.selectedRow) {
        console.log('if' + this.selectedRow);
        this.selectedRow = -1;
        this.documentToEdit = 0;
      } else {
        console.log('else' + this.selectedRow);
        this.selectedRow = index;
        // this.documentToEdit = data.documentID;
      }
    };
  }

  ngOnInit() {
    this.selectedRow = -1;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // Uncomment line below for pagination
    // this.dataSource.paginator = this.paginator;
  }
  ngOnChanges() {
    this.applyFilter(this.filterValue);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
