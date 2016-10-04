import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-paging',
    templateUrl: 'use-paging.component.html'
})
export class UsePagingComponent {
    constructor(private airportsService: AirportsService) {
    }
    getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
        return this.airportsService.getAirportsPagedList(request);
    }
}
