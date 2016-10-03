import { Component } from '@angular/core';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-selection',
    templateUrl: 'use-selection.component.html'
})
export class UseSelectionComponent {
    constructor(public airportsService: AirportsService) {
    }
    getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
        return this.airportsService.getAirportsList(request);
    }
}
