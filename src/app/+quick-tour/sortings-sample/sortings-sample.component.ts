import { Component } from '@angular/core';

import { Airport, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-sortings-sample',
    templateUrl: 'sortings-sample.component.html'
})
export class SortingsSampleComponent {
    airports: Airport[];
    constructor(public airportsService: AirportsService) {
        this.airportsService.getAirports()
            .subscribe(airports => this.airports = airports.slice(0, 5));
    }
}
