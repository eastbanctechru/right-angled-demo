import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-rt-list',
    templateUrl: 'use-rt-list.component.html'
})
export class UseRtListComponent {
    constructor(private airportsService: AirportsService) {
    }
    getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
        return this.airportsService.getAirportsPagedList(request);
    }
}
