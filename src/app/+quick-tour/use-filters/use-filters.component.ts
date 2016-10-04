import { Component } from '@angular/core';

import { filter } from 'right-angled';
import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-filters',
    templateUrl: 'use-filters.component.html'
})
export class UseFiltersComponent {
    @filter public airportName: string = null;
    @filter public countryName: string = null;
    constructor(public airportsService: AirportsService) {
    }
    getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
        return this.airportsService.getAirportsPagedList(request);
    }
}
