import { Component } from '@angular/core';

import { Airport, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-basic-sample',
    templateUrl: 'basic-sample.component.html'
})
export class BasicSampleComponent {
    public airports: Airport[];
    constructor(public airportsService: AirportsService) {
    }
    public getData(): void {
        this.airportsService.getAirports()
            .subscribe(airports => this.airports = airports);
    }
}
