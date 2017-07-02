/* tslint:disable: max-line-length no-shadowed-variable */
import { Injectable } from "@angular/core";
import { ConnectionBackend, Http, Request, RequestOptions, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { TransferState } from "../transfer-state/transfer-state";

import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class TransferHttp {
    constructor(private http: Http, protected transferState: TransferState) {}

    request(uri: string | Request, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(uri, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.request(url, options);
        });
    }
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.get(url, options);
        });
    }
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.getPostData(url, body, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.post(url, body.options);
        });
    }
    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.put(url, options);
        });
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.delete(url, options);
        });
    }
    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        return this.getPostData(url, body, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.patch(url, body.options);
        });
    }
    head(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.head(url, options);
        });
    }
    options(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.getData(url, options, (url: string, options: RequestOptionsArgs) => {
            return this.http.options(url, options);
        });
    }

    private getData(
        uri: string | Request,
        options: RequestOptionsArgs,
        callback: (uri: string | Request, options?: RequestOptionsArgs) => Observable<Response>
    ): Observable<any> {
        let url = uri;

        if (typeof uri !== "string") {
            url = uri.url;
        }

        const key = url + JSON.stringify(options);

        try {
            return this.resolveData(key);
        } catch (e) {
            return callback(uri, options).map(res => res.json()).do(data => {
                this.setCache(key, data);
            });
        }
    }

    private getPostData(
        uri: string | Request,
        body: any,
        options: RequestOptionsArgs,
        callback: (uri: string | Request, body: any, options?: RequestOptionsArgs) => Observable<Response>
    ): Observable<any> {
        let url = uri;

        if (typeof uri !== "string") {
            url = uri.url;
        }

        const key = url + JSON.stringify(body) + JSON.stringify(options);

        try {
            return this.resolveData(key);
        } catch (e) {
            return callback(uri, body, options).map(res => res.json()).do(data => {
                this.setCache(key, data);
            });
        }
    }

    private resolveData(key: string): Observable<any> {
        const data = this.getFromCache(key);

        if (!data) {
            throw new Error();
        }

        return Observable.fromPromise(Promise.resolve(data));
    }

    private setCache(key: string, data: any): Map<string, any> {
        return this.transferState.set(key, data);
    }

    private getFromCache(key: string): any {
        return this.transferState.get(key);
    }
}
