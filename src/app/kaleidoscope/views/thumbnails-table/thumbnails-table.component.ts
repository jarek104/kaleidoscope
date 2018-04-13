import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';

@Component({
  selector: 'app-thumbnails-table',
  templateUrl: './thumbnails-table.component.html',
  styleUrls: ['./thumbnails-table.component.scss']
})
export class ThumbnailsTableComponent implements OnInit {

  @Input() dataSource = new MatTableDataSource<IDocument>();
  constructor() { }

  ngOnInit() {
  }

  log(name) {
    console.log(name);
  }
}
