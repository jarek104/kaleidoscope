import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RowDensityService {

  rowDensity = new BehaviorSubject<string>('low');
  constructor() { }

  changeDensity(size) {
    this.rowDensity.next(size);
    console.log(size);
  }

}
