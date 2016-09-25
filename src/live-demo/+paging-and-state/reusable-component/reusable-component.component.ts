import { Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { AirportsBufferedListRequest, AirportsService } from '../../shared';

@Component({
    selector: 'rt-demo-reusable-component',
    templateUrl: 'reusable-component.component.html'
})
export class ReusableComponentComponent {
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(public airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsBufferedListRequest): any => {
        return this.airportsService.getAirportsBuffered(requestParams, 700);
    };
}
