import { Component } from '@angular/core';
import { filter, RtList } from 'right-angled';
import { Observable } from 'rxjs/Observable';

import { AirportsService, ListResponse, LookupItem, LookupsService } from '../../shared';

@Component({
  selector: 'rt-demo-filters-sample',
  templateUrl: 'filters-sample.component.html'
})
export class FiltersSampleComponent {
  public airportSizes: LookupItem[];
  public airportTypes: LookupItem[];
  public lastRequest: any = '';

  @filter() public airportName: string = null;
  @filter() public country: string = null;
  @filter() public airportSize: string = null;
  @filter() public airportType: string = null;

  constructor(private airportsService: AirportsService, private lookupsService: LookupsService) {
    this.lookupsService.getAirportSizeLookups().subscribe((sizes) => this.airportSizes = sizes);
    this.lookupsService.getAirportTypeLookups().subscribe((types) => this.airportTypes = types);
  }

  public getAirports = (request: any): Observable<ListResponse> => {
    this.lastRequest = request;
    return this.airportsService.getAirportsPagedList(request);
  }

  public onListInit(list: RtList): void {
    list.registerFilterTarget(this);
  }
}
