import { Component, OnInit, Input } from '@angular/core';
import { TableViewService } from '../services/table-view.service';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  constructor(private viewService: TableViewService) { }

  @Input() numberOfSelectedItems;

  ngOnInit() {
    this.numberOfSelectedItems = 0;
  }
  setCurrentView(viewName) {
    this.viewService.setCurrentView(viewName.value);
  }
}
