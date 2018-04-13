import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { MatTableDataSource } from '@angular/material';
import { IDocument } from '../../models/document';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {

  @Input() dataSource = new MatTableDataSource<IDocument>();
 // google maps zoom level
 zoom = 6;

 // initial center position for the map
 lat = 52.2297;
 lng = 21.0122;
}
