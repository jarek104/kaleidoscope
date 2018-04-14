import { Injectable } from '@angular/core';
import { DataControllerService } from './data-controller.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FilteringService {

  constructor(private dataControllerService: DataControllerService) { }

  searchTerm = new BehaviorSubject<string>('');
  
  applyFilter(filterValue: string) {
    this.searchTerm.next(filterValue);
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataControllerService.dataSource.filter = filterValue;
  }
}
