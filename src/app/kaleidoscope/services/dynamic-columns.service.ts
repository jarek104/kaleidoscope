import { Injectable, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IColumn } from '../models/column';

@Injectable()
export class DynamicColumnsService {

  columnDefinitions = new BehaviorSubject<IColumn[]>([]);

  private metaColumns: IColumn[];
  private keywordColumns: IColumn[];

  constructor() { }

  getMetaColumns(): string[] {
    const meta = [];
    this.columnDefinitions.value.map(values => {
      meta.push(values);
      console.log(values.name);
    });
    return meta;
  }

}
