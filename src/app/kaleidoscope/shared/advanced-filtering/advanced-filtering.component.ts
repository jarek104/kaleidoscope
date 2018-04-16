import { Component, OnInit, Input } from '@angular/core';
import { FilteringService } from '../../services/filtering.service';

@Component({
  selector: 'app-advanced-filtering',
  templateUrl: './advanced-filtering.component.html',
  styleUrls: ['./advanced-filtering.component.scss']
})
export class AdvancedFilteringComponent implements OnInit {

  constructor( private _filteringService: FilteringService) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this._filteringService.applyFilter(filterValue);
  }
}
