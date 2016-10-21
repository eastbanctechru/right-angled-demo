import { Component } from '@angular/core';
import { RtList } from 'right-angled';

import { AirportsListRequest, AirportsService, LocalStorageStateService, QueryStringStateService, SessionStorageStateService } from '../../shared';

@Component({
    providers: [LocalStorageStateService, QueryStringStateService, SessionStorageStateService],
    selector: 'rt-demo-persistence-sample',
    styleUrls: ['persistence-sample.component.scss'],
    templateUrl: 'persistence-sample.component.html'
})
export class PersistenceSampleComponent {
    constructor(private airportsService: AirportsService, private queryStringStateService: QueryStringStateService, private localStorageStateService: LocalStorageStateService, private sessionStorageStateService: SessionStorageStateService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
    onListInit(list: RtList): void {
        list.registerFilterTarget(this);
        list.registerStateService(this.localStorageStateService, this.sessionStorageStateService, this.queryStringStateService);
    }
}
