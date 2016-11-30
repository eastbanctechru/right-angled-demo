import { Component, ViewChild } from '@angular/core';
import { ListDirective } from 'right-angled';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-state-components',
  templateUrl: 'state-components.component.html'
})
export class StateComponentsComponent {
  private raiseError: boolean = false;
  private returnNoData: boolean = false;
  @ViewChild(ListDirective) public listDirective: ListDirective;
  constructor(private airportsService: AirportsService) {
  }
  public loadData = (requestParams: AirportsListRequest): any => {
    return this.airportsService.getAirportsList(requestParams).map((response: Airport[]) => {
      if (this.raiseError) {
        this.raiseError = false;
        throw new Error('Error!!!');
      }
      if (this.returnNoData) {
        this.returnNoData = false;
        return [];
      }
      return response;
    });
  }
  public loadEmptyData(): void {
    this.returnNoData = true;
    this.listDirective.reloadData();
  }
  public raiseErrorOnLoad(): void {
    this.raiseError = true;
    this.listDirective.reloadData();
  }
}
