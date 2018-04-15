import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RowDensityService {

  rowDensity = new BehaviorSubject<string>('medium');
  constructor() { }

  changeDensity(size) {
    this.rowDensity.next(size);
  }

}
