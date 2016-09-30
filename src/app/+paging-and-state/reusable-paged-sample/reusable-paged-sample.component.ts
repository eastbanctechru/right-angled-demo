import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-reusable-paged-sample',
    templateUrl: 'reusable-paged-sample.component.html'
})
export class ReusablePagedListSampleComponent {
    constructor(public airportsService: AirportsService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
}
