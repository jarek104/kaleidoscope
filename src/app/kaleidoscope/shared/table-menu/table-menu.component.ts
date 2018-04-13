import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-menu',
  templateUrl: './table-menu.component.html',
  styleUrls: ['./table-menu.component.scss']
})
export class TableMenuComponent implements OnInit {

  @Input() isDisabled?;
  constructor() { }

  ngOnInit() {
  }

}
