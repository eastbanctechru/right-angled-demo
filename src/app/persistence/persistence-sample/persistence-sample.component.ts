import { Component } from '@angular/core';
import { RtList } from 'right-angled';

import { AirportsPagedListRequest, AirportsService, LocalStorageStateService, QueryStringStateService, SessionStorageStateService } from '../../shared';

@Component({
  providers: [LocalStorageStateService, QueryStringStateService, SessionStorageStateService],
  selector: 'rt-demo-persistence-sample',
  templateUrl: 'persistence-sample.component.html'
})
export class PersistenceSampleComponent {
  constructor(private airportsService: AirportsService, private queryStringStateService: QueryStringStateService, private localStorageStateService: LocalStorageStateService, private sessionStorageStateService: SessionStorageStateService) {
    this.airportsService = airportsService;
  }
  public loadData = (requestParams: AirportsPagedListRequest): any => {
    return this.airportsService.getAirportsPagedList(requestParams);
  }
  onListInit(list: RtList): void {
    list.registerStateService(this.localStorageStateService, this.sessionStorageStateService, this.queryStringStateService);
  }
}
