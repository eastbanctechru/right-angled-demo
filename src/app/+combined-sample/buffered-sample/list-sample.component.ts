import { Component } from '@angular/core';

import { AirportsBufferedListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-list-sample',
    templateUrl: 'list-sample.component.html'
})
export class BufferedListSampleComponent {
    constructor(public airportsService: AirportsService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsBufferedListRequest): any => {
        return this.airportsService.getAirportsBuffered(requestParams);
    };
}
