import { Component, OnInit, AfterViewInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IDocument } from '../../models/document';
import { DocumentService } from '../services/document.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-metadata-table',
  templateUrl: './metadata-table.component.html',
  styleUrls: ['./metadata-table.component.scss', '../data-table/shared-table-style.scss']
})
export class MetadataTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['select', 'id', 'name', 'author', 'dateCreated', 'lastModified', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @Input() dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';
  @Input() columns;


  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);

  @Output() rowSelectionChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.selection.onChange.subscribe( () => {
      this.rowSelectionChanged.emit(this.selection.selected.length);});
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));


  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
