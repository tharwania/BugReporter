import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BugModel } from './bug.type'; 

@Injectable()
export class BugService {
    constructor(private _http: Http) { }
    private url: string = "/api/bug";

    getBugList() {
        return this._http.get(this.url)
            .map((response: Response) => response.json() as BugModel[]);
    }

    createBug(bug: BugModel) {
        let bodyString = JSON.stringify(bug); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.url, bug, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}
