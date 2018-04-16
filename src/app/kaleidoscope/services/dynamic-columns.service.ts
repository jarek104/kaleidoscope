import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IColumn } from '../models/column';

@Injectable()
export class DynamicColumnsService implements OnInit{

  columnDefinitions = new BehaviorSubject<IColumn[]>([]);

  metaColumns: IColumn[] = [];
  keywordColumns: IColumn[] = [];

  constructor() { }

  ngOnInit() {
    this.columnDefinitions.subscribe(values => {

    });
  }


}
