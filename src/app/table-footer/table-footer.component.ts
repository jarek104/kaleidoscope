import { Component, OnInit } from '@angular/core';
import { TableViewService } from '../services/table-view.service';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  constructor(private viewService: TableViewService) { }

  ngOnInit() {
    
  }
  setCurrentView(viewName) {
    console.log(viewName.value);
    this.viewService.setCurrentView(viewName.value);
  }
}
