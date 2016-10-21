import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-buffered-components',
  templateUrl: 'buffered-components.component.html'
})
export class BufferedComponentsComponent {
  constructor(private airportsService: AirportsService) {
  }
  public loadData = (requestParams: AirportsPagedListRequest): any => {
  return this.airportsService.getAirportsPagedList(requestParams);
  };
}
