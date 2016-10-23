import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-state',
  templateUrl: 'use-state.component.html'
})
export class UseStateComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest) => {
    return this.airportsService.getAirportsList(request);
  }
}
