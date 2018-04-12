import { Component, OnInit, OnChanges, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { IDocument } from '../../models/document';
import { DocumentService } from '../services/document.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss', '../data-table/shared-table-style.scss']
})
export class KeywordsTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = [
    'select',
    'id',
    'employee_first_name',
    'employee_last_name',
    'email',
    'department',
    'city',
    'streetAddress',
    'stockIndustry',
    'movieGender'
  ];

  @ViewChild(MatSort) sort: MatSort;
  @Input() dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';
  @Input() columns;
  @Output() rowSelectionChanged: EventEmitter<number> = new EventEmitter<number>();


  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);

  constructor(private documentsService: DocumentService ) {}

  ngOnInit() {
    this.selection.onChange.subscribe( () => {
      this.rowSelectionChanged.emit(this.selection.selected.length); });
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
