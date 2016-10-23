import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-sortings',
  templateUrl: 'use-sortings.component.html'
})
export class UseSortingsComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest) => {
    return this.airportsService.getAirportsList(request);
  }
}
