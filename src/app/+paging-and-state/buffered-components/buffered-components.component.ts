import { Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { AirportsPagedListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-buffered-components',
    templateUrl: 'buffered-components.component.html'
})
export class BufferedComponentsComponent {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(private airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsPagedListRequest): any => {
        return this.airportsService.getAirportsPagedList(requestParams);
    };
}
