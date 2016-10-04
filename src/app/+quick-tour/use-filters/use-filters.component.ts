import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterConfig, ListComponent, filter } from 'right-angled';

import { AirportsPagedListRequest, AirportsService, ListResponse } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-filters',
    templateUrl: 'use-filters.component.html'
})
export class UseFiltersComponent implements AfterViewInit {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    @filter public airportName: string = null;
    @filter({ defaultValue: 'Iceland', parameterName: 'country' } as FilterConfig) public countryName: string = null;
    constructor(public airportsService: AirportsService) {
    }
    getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
        return this.airportsService.getAirportsPagedList(request);
    }
    ngAfterViewInit(): void {
        this.listComponent.listService.filtersService.registerFilterTarget(this);
    }
}
