import { Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../models/document';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataControllerService {


  dataSource = new MatTableDataSource<IDocument>();

  selectedRowsData = new Subject<IDocument[]>();


}
