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

  dataSourceFromTheService = new BehaviorSubject<IDocument[]>([]);
  columns = new BehaviorSubject<IColumn[]>([]);
  preselectedItemIds = ['48281', '43373'];

  constructor(private dps: DocumentProviderService) {}

  ngOnInit() {
    this.dps.getDocuments().subscribe(data => {
      this.dataSourceFromTheService.next(data);
      // console.log('app.component.ts' + JSON.stringify(this.dataSourceFromTheService));

    });
    this.dps.getColumns().subscribe(data => {
      this.columns.next(data);
    });
  }
}
