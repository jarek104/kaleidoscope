import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';
import { SelectionModel } from '@angular/cdk/collections';
import { DataControllerService } from '../../services/data-controller.service';
import { RowDensityService } from '../../services/row-density.service';


@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss', '../shared-table-style.scss']
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
    'stockName'
  ];

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';
  rowDensity;
  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);

  constructor(
    private _dataControllerService: DataControllerService,
    private _densityService: RowDensityService) {
  }

  ngOnInit() {
    this.dataSource = this._dataControllerService.dataSource;
    this.selection.onChange.subscribe( () => {
      this._dataControllerService.selectedRowsData.next(this.selection.selected);
    });
    this._densityService.rowDensity.subscribe(value => {
      this.rowDensity = value;
    });
  }

  isSelected(item: IDocument): boolean {
    return this._dataControllerService.selection.selected.includes(item);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected >= numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.selection = this._dataControllerService.selection;
  }
  getRowClasses(item: IDocument) {
    const classes: string[] = [];
    if (this._dataControllerService.selection.selected.includes(item)) {
      classes.push('selected');
    }
    switch (this.rowDensity) {
      case 'high': {
        classes.push('row-density__high');
        break;
      }
      case 'low': {
        classes.push('row-density__low');
        break;
      }
      default: {
        classes.push('row-density__medium');
        break;
      }
   }
    return classes;
  }
}
