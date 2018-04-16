import { Component, OnInit } from '@angular/core';
import { TableViewService } from '../services/table-view.service';

@Component({
  selector: 'app-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.scss']
})
export class ViewSelectorComponent implements OnInit {

  constructor(
    private _viewService: TableViewService
  ) { }

  ngOnInit() {

  }
  setCurrentView(viewName) {
    this._viewService.setCurrentView(viewName);
    console.log(viewName);
  }
}
