import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-selection',
  templateUrl: 'use-selection.component.html'
})
export class UseSelectionComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest) => {
    return this.airportsService.getAirportsList(request);
  }
}
