import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-controls',
  templateUrl: 'use-controls.component.html'
})
export class UseControlsComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest) => {
    return this.airportsService.getAirportsList(request);
  }
}
