import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IDocument } from '../kaleidoscope/models/document';
import { IColumn } from '../kaleidoscope/models/column';

@Injectable()
export class DocumentProviderService {
  private _documentUrl = './assets/docs2shorter.json';
  private _columnsUrl = './assets/columns.json';

    constructor(private _http: HttpClient) { }

    getDocuments(): Observable<IDocument[]> {
        return this._http.get<IDocument[]>(this._documentUrl)
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getColumns(): Observable<IColumn[]> {
      return this._http.get<IDocument[]>(this._columnsUrl)
        //   .do(data => console.log('Columns: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

}
