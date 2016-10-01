import { Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { AirportsListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-buffered-components',
    templateUrl: 'buffered-components.component.html'
})
export class BufferedComponentsComponent {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(public airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams);
    };
}
