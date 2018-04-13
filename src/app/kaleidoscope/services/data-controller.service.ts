import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../models/document';

@Injectable()
export class DataControllerService {

  dataSource = new MatTableDataSource<IDocument>();
  numberOfSelectedItems: number;
  selectedRowsData: IDocument[];

  constructor() { }

}
