import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDocument } from '../../models/document';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DocumentService {
  private _documentUrl = './assets/docs2.json';

    constructor(private _http: HttpClient) { }

    getDocuments(): Observable<IDocument[]> {
        return this._http.get<IDocument[]>(this._documentUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

}
