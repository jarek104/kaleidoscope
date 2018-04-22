import { Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../models/document';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()
export class DataControllerService {

  dataSource = new MatTableDataSource<IDocument>();

  selectedRowsData = new BehaviorSubject<IDocument[]>([]);

  private _initialSelection = [];
  private _allowMultiSelect = true;

  selection = new SelectionModel<IDocument>(this._allowMultiSelect, this._initialSelection);

  selectRows(rows: IDocument[]) {
    rows.forEach(doc => {
      this.selection.select(doc);
      console.log(doc);
    });
  }

}
