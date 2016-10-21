import { Component } from '@angular/core';

import { AirportsPagedListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-paged-components',
  styleUrls: ['paged-components.component.scss'],
  templateUrl: 'paged-components.component.html'
})
export class PagedComponentsComponent {
  constructor(private airportsService: AirportsService) {
  }
  public loadData = (requestParams: AirportsPagedListRequest): any => {
    return this.airportsService.getAirportsPagedList(requestParams);
  };
}
