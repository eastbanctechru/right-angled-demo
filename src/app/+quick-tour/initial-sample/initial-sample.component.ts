import { Component } from '@angular/core';

import { Airport, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-initial-sample',
    templateUrl: 'initial-sample.component.html'
})
export class InitialSampleComponent {
    airports: Airport[];
    constructor(public airportsService: AirportsService) {
        this.airportsService.getAirports()
            .subscribe(airports => this.airports = airports.slice(0, 5));
    }
}
