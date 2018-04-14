import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';
import { DataControllerService } from '../../services/data-controller.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  dataSource = new MatTableDataSource<IDocument>();
  // default zoom level
  zoom = 6;

  // initial center position for the map - Warsaw
  lat = 52.2297;
  lng = 21.0122;

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
