import { Component } from '@angular/core';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-list',
  templateUrl: 'use-list.component.html'
})
export class UseListComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest) => {
    return this.airportsService.getAirportsList(request);
  }
}
