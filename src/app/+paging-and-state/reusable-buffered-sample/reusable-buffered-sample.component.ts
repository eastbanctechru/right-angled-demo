import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-reusable-buffered-sample',
    templateUrl: 'reusable-buffered-sample.component.html'
})
export class ReusableBufferedListSampleComponent {
    constructor(public airportsService: AirportsService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
}
