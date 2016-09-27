import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-persistence-sample',
    templateUrl: 'persistence-sample.component.html'
})
export class PersistenceSampleComponent {
    constructor(public airportsService: AirportsService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsPagedListRequest): any => {
        return this.airportsService.getAirportsPaged(requestParams);
    };
}
