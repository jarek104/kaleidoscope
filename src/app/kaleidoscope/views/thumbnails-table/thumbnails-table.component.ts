import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';
import { DataControllerService } from '../../services/data-controller.service';

@Component({
  selector: 'app-thumbnails-table',
  templateUrl: './thumbnails-table.component.html',
  styleUrls: ['./thumbnails-table.component.scss']
})
export class ThumbnailsTableComponent implements OnInit {

  dataSource = new MatTableDataSource<IDocument>();
  constructor(private _dcs: DataControllerService) { }

  ngOnInit() {
    this.dataSource = this._dcs.dataSource;
  }

  isSelected(item: IDocument): boolean {
    return this._dcs.selection.selected.includes(item);
  }

  toggleSelection(item: IDocument) {
    if (this._dcs.selection.selected.includes(item)) {
      this._dcs.selection.deselect(item);
    } else {
      this._dcs.selection.select(item);
    }
  }
}
