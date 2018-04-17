import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';
import { SelectionModel } from '@angular/cdk/collections';
import { DataControllerService } from '../../services/data-controller.service';
import { RowDensityService } from '../../services/row-density.service';
import { DynamicColumnsService } from '../../services/dynamic-columns.service';


@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['../shared-table-style.scss', './keywords-table.component.scss']
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

  dynamicColumnDefs: any[] = [];
  dynamicColumnIds: string[] = [];

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';
  rowDensity;
  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);

  constructor(
    private _columnService: DynamicColumnsService,
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

    this._columnService.keywordColumns.subscribe(values => {
      values.map(cols => {
        this.dynamicColumnDefs.push({
          id: cols.name.toUpperCase(),
          property: cols.name,
          headerText: cols.displayName
        });
      });

      this.dynamicColumnIds = [];
      this.dynamicColumnIds = this.dynamicColumnIds.concat('select', this.dynamicColumnDefs.map(columnDef => columnDef.id), 'actions');
    });

    this._columnService.shift.subscribe(data =>
      this.dynamicColumnIds.push(this.dynamicColumnIds.shift())
    );
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
