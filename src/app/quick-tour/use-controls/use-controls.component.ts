import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-use-controls',
  templateUrl: 'use-controls.component.html'
})
export class UseControlsComponent {
  constructor(private airportsService: AirportsService) {
  }
  getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
    return this.airportsService.getAirportsList(request);
  }
}
