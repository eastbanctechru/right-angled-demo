import { Component, ViewChild } from '@angular/core';
import { ListComponent } from 'right-angled';

import { Airport, AirportsListRequest, AirportsService, ListResponse } from '../../shared';

@Component({
    selector: 'rt-demo-state-controls',
    templateUrl: 'state-controls.component.html'
})
export class StateControlsComponent {
    private raiseError: boolean = false;
    private returnNoData: boolean = false;
    @ViewChild(ListComponent) public listComponent: ListComponent;
    constructor(public airportsService: AirportsService) {
    }
    public loadData = (requestParams: AirportsListRequest): any => {
        return this.airportsService.getAirportsList(requestParams, 700).map((response: ListResponse<Airport>) => {
            if (this.raiseError) {
                this.raiseError = false;
                throw new Error('Error!!!');
            }
            if (this.returnNoData) {
                this.returnNoData = false;
                response.items = [];
                response.loadedCount = 0;
                response.totalCount = 0;
            }
            return response;
        });
    };
    public loadEmptyData(): void {
        this.returnNoData = true;
        this.listComponent.reloadData();
    };
    public raiseErrorOnLoad(): void {
        this.raiseError = true;
        this.listComponent.reloadData();
    };
}
