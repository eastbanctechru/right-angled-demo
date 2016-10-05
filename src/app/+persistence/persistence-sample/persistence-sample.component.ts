import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { AirportsListRequest, AirportsService, LocalStorageStateService, QueryStringStateService, SessionStorageStateService } from '../../shared';

@Component({
    providers: [LocalStorageStateService, QueryStringStateService, SessionStorageStateService],
    selector: 'rt-demo-persistence-sample',
    templateUrl: 'persistence-sample.component.html'
})
export class PersistenceSampleComponent implements AfterViewInit {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(private airportsService: AirportsService, private queryStringStateService: QueryStringStateService, private localStorageStateService: LocalStorageStateService, private sessionStorageStateService: SessionStorageStateService) {
        this.airportsService = airportsService;
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
    ngAfterViewInit(): void {
        this.listComponent.listService.registerFilterTarget(this);
        this.listComponent.listService.registerStateService(this.localStorageStateService, this.sessionStorageStateService, this.queryStringStateService);
    }

}
