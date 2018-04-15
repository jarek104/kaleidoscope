import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IDocument } from '../../models/document';
import { SelectionModel } from '@angular/cdk/collections';
import { DataControllerService } from '../../services/data-controller.service';
import { ObservableMedia } from '@angular/flex-layout';


@Component({
  selector: 'app-thumbnails-table',
  templateUrl: './thumbnails-table.component.html',
  styleUrls: ['./thumbnails-table.component.scss']
})
export class ThumbnailsTableComponent implements OnInit {

  dataSource = new BehaviorSubject<IDocument[]>([]);

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<IDocument>(this.allowMultiSelect, this.initialSelection);
  columns = 4;

  constructor(
    private _dataControllerService: DataControllerService,
    private _observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.dataSource = this._dataControllerService.dataSource.connect();

    // Push selection to the service everytime componenent's selection changes
    this.selection.onChange.subscribe( () => {
      this._dataControllerService.selectedRowsData.next(this.selection.selected);
    });
    this._observableMedia.subscribe(value => {
      switch (value.mqAlias) {
        case 'xs': {
          this.columns = 1;
          break;
        }
        case 'sm': {
          this.columns = 2;
          break;
        }
        case 'md': {
          this.columns = 3;
          break;
        }
        default: {
          this.columns = 4;
          break;
        }

      }
    });
  }

  isSelected(item: IDocument): boolean {
    return this._dataControllerService.selection.selected.includes(item);
  }

  toggleSelection(item: IDocument) {
    if (this._dataControllerService.selection.selected.includes(item)) {
      this._dataControllerService.selection.deselect(item);
    } else {
      this._dataControllerService.selection.select(item);
    }
  }
}
