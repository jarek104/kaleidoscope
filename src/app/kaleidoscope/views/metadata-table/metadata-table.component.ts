import { Component, OnInit, AfterViewInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IDocument } from '../../models/document';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { DataControllerService } from '../../services/data-controller.service';

@Component({
  selector: 'app-metadata-table',
  templateUrl: './metadata-table.component.html',
  styleUrls: ['./metadata-table.component.scss', '../shared-table-style.scss']
})
export class MetadataTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['select', 'id', 'name', 'author', 'dateCreated', 'lastModified', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';
  @Input() columns;


  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);

  constructor(private _dataControllerService: DataControllerService) {
  }

  ngOnInit() {
    this.dataSource = this._dataControllerService.dataSource;
    this.selection.onChange.subscribe( () => {
      this._dataControllerService.selectedRowsData.next(this.selection.selected);
    });
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
