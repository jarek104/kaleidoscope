import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-menu',
  templateUrl: './selection-menu.component.html',
  styleUrls: ['./selection-menu.component.scss']
})
export class SelectionMenuComponent implements OnInit {

  @Input() isDisabled?;
  constructor() { }

  ngOnInit() {
  }

}
