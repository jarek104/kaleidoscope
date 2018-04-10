import { Component, OnInit, OnChanges, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { IDocument } from '../../models/document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss']
})
export class KeywordsTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns = [
    'employee_first_name',
    'employee_last_name',
    'email',
    'department',
    'city',
    'streetAddress',
    'stockIndustry',
    'movieGender'];
  @Input() dataSource = new MatTableDataSource<IDocument>();
  selectedRow: Number;
  setClickedRow: Function;
  documentToEdit;
  @Input() filterValue = '';

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
