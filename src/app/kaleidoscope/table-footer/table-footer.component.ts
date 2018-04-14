import { Component, OnInit, Input } from '@angular/core';
import { TableViewService } from '../services/table-view.service';
import { DataControllerService } from '../services/data-controller.service';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  constructor(
    private _viewService: TableViewService,
    private _dataControllerService: DataControllerService
  ) { }

  numberOfSelectedItems;

  ngOnInit() {
    this.numberOfSelectedItems = 0;
    this._dataControllerService.selectedRowsData.subscribe( data => {
      this.numberOfSelectedItems = data.length;
    });
  }
  setCurrentView(viewName) {
    this._viewService.setCurrentView(viewName.value);
  }
}
