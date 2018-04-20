import { Component, OnInit, Input } from '@angular/core';
import { TableViewService } from '../../services/table-view.service';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {

  @Input() isDisabled?;
  view: string;
  constructor(private tableView: TableViewService) { }

  ngOnInit() {
    this.tableView.selectedView$.subscribe(val => {
      this.view = val;
      console.log(this.view);
    });
  }

}
