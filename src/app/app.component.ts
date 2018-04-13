import { Component, OnInit } from '@angular/core';
import { DocumentProviderService } from './document-provider/document-provider.service';
import { IDocument } from './kaleidoscope/models/document';
import { MatTableDataSource } from '@angular/material';
import { IColumn } from './kaleidoscope/models/column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataSource = new MatTableDataSource<IDocument>();
  columns: IColumn[];

  constructor(private dps: DocumentProviderService) {}

  ngOnInit() {
    this.dps.getDocuments().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dps.getColumns().subscribe(data => {
      this.columns = data;
    });
  }
}
