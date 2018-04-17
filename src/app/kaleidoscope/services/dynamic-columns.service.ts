import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IColumn } from '../models/column';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DynamicColumnsService {

  columnDefinitions = new BehaviorSubject<IColumn[]>([]);

  metaColumns = new Observable<IColumn[]>();
  keywordColumns = new Observable<IColumn[]>();

  constructor() {
    this.metaColumns = this.columnDefinitions.asObservable().pipe(map(
      values => values.filter(column =>
        column.name === 'id' ||
        column.name === 'name' ||
        column.name === 'author' ||
        column.name === 'dateCreated' ||
        column.name === 'lastModified'
      )
    ));
    this.keywordColumns = this.columnDefinitions.asObservable().pipe(map(
      values => values.filter(column =>
        column.name !== 'id' &&
        column.name !== 'name' &&
        column.name !== 'author' &&
        column.name !== 'dateCreated' &&
        column.name !== 'lastModified'
      )
    ));

  }
}
