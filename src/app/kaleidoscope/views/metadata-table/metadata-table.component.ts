import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';
import { SelectionModel } from '@angular/cdk/collections';
import { DataControllerService } from '../../services/data-controller.service';
import { RowDensityService } from '../../services/row-density.service';
import { DynamicColumnsService } from '../../services/dynamic-columns.service';
import { IColumn } from '../../models/column';
<<<<<<< HEAD
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
=======
>>>>>>> a94cc671ba52f16306d696370639bbdd8fd2c6d4


@Component({
  selector: 'app-metadata-table',
  templateUrl: './metadata-table.component.html',
  styleUrls: ['./metadata-table.component.scss', '../shared-table-style.scss']
})
export class MetadataTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = ['author'];

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<IDocument>();
  @Input() filterValue = '';

  showButtons: Boolean = false;

  initialSelection = [];
  allowMultiSelect = true;
  rowDensity;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);
<<<<<<< HEAD
  metaColumns: Observable<any[]>;

  dynamicColumnDefs: any[] = [];
  dynamicColumnIds: string[] = [];
=======
  columns: IColumn[];
>>>>>>> a94cc671ba52f16306d696370639bbdd8fd2c6d4

  constructor(
    private _dynamicColumns: DynamicColumnsService,
    private _dataControllerService: DataControllerService,
    private _densityService: RowDensityService) {
  }

  ngOnInit() {
    this.dataSource = this._dataControllerService.dataSource;
    // Push selection to the service everytime componenent's row selection changes
    this.selection.onChange.subscribe( () => {
      this._dataControllerService.selectedRowsData.next(this.selection.selected);
    });
    this._densityService.rowDensity.subscribe(value => {
      this.rowDensity = value;
    });
<<<<<<< HEAD
    this.metaColumns = this._dynamicColumns.columnDefinitions.asObservable().pipe(map(
      values => values.filter(column =>
        // column.name === 'id' ||
        // column.name === 'name' ||
        column.name === 'author'
        // column.name === 'dateCreated' ||
        // column.name === 'lastModified'
      )));
    this.metaColumns.subscribe(column => {
      column.map(val => console.log(val.name));
      // this.dynamicColumnDefs.push({
      //   id: column[0].name.toUpperCase(),
      //   property: column[0],
      //   headerText: column[0]

      // });
      // console.log(this.dynamicColumnDefs);
      // this.dynamicColumnIds = this.dynamicColumnDefs.map(columnDef => columnDef.id);
      // console.log(this.dynamicColumnIds);
=======
    this._dynamicColumns.columnDefinitions.subscribe(values => {
      this.columns = values;
>>>>>>> a94cc671ba52f16306d696370639bbdd8fd2c6d4
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
    this.dataSource = this._dataControllerService.dataSource;
<<<<<<< HEAD
    // this.displayedColumns = this._dynamicColumns.getMetaColumns();

=======
    this.displayedColumns = this._dynamicColumns.getMetaColumns();
>>>>>>> a94cc671ba52f16306d696370639bbdd8fd2c6d4
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
