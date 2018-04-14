import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TableViewService {

  private selectedView = new BehaviorSubject<string>(ViewType.Metadata);
  selectedView$ = this.selectedView.asObservable();

  setCurrentView(view: ViewType) {
    this.selectedView.next(view);
  }
}
enum ViewType {
  Metadata = 'metadata',
  Keywords = 'keywords',
  Thumbnails = 'thumbnails',
  Map = 'map'
}
