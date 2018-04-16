import { Component, OnInit } from '@angular/core';
import { IDocument } from './kaleidoscope/models/document';
import { MatTableDataSource } from '@angular/material';
import { IColumn } from './kaleidoscope/models/column';
import { DocumentProviderService } from './app-services/document-provider.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataSource = new MatTableDataSource<IDocument>();
  columns = new BehaviorSubject<IColumn[]>([]);

  constructor(private dps: DocumentProviderService) {}

  ngOnInit() {
    this.dps.getDocuments().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dps.getColumns().subscribe(data => {
      this.columns.next(data);
    });
  }
}
