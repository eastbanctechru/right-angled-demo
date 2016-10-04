import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FilterConfig, ListComponent, filter } from 'right-angled';

import { AirportsPagedListRequest, AirportsService, ListResponse, QueryStringStateService } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    providers: [QueryStringStateService],
    selector: 'rt-demo-use-persistence',
    templateUrl: 'use-persistence.component.html'
})
export class UsePersistenceComponent implements AfterViewInit {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    @filter public airportName: string = null;
    @filter({ defaultValue: 'Iceland', parameterName: 'country' } as FilterConfig) public countryName: string = null;

    constructor(private airportsService: AirportsService, private queryStringStateService: QueryStringStateService) {
    }
    getAirports = (request: AirportsPagedListRequest): Observable<ListResponse> => {
        return this.airportsService.getAirportsPagedList(request);
    }
    ngAfterViewInit(): void {
        this.listComponent.listService.filtersService.registerFilterTarget(this);
        this.listComponent.listService.registerStateService(this.queryStringStateService);
    }
}
