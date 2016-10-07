import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ListDirective } from 'right-angled';

import { AirportsListRequest, AirportsService, LocalStorageStateService, QueryStringStateService, SessionStorageStateService } from '../../shared';

@Component({
    providers: [LocalStorageStateService, QueryStringStateService, SessionStorageStateService],
    selector: 'rt-demo-persistence-sample',
    styleUrls: ['persistence-sample.component.scss'],
    templateUrl: 'persistence-sample.component.html'
})
export class PersistenceSampleComponent implements AfterViewInit {
    @ViewChild(ListDirective) public listDirective: ListDirective;
    constructor(private airportsService: AirportsService, private queryStringStateService: QueryStringStateService, private localStorageStateService: LocalStorageStateService, private sessionStorageStateService: SessionStorageStateService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
    ngAfterViewInit(): void {
        this.listDirective.listService.registerFilterTarget(this);
        this.listDirective.listService.registerStateService(this.localStorageStateService, this.sessionStorageStateService, this.queryStringStateService);
    }

}
