import { Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-paged-components',
    styleUrls: ['paged-components.component.scss'],
    templateUrl: 'paged-components.component.html'
})
export class PagedComponentsComponent {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(public airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
}
