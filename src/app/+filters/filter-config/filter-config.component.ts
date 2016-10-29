import { Component } from '@angular/core';
import { FiltersService, filter } from 'right-angled';

@Component({
  providers: [FiltersService],
  selector: 'rt-demo-filter-config',
  templateUrl: 'filter-config.component.html'
})
export class FilterConfigComponent {
  public lastRequest: any = '';

  @filter public airportName: string = null;
  @filter public country: string = null;
  @filter public airportSize: string = null;
  @filter public airportType: string = null;

  constructor(private filtersService: FiltersService) {
    filtersService.registerFilterTarget(this);
  }
  public showRequestState(): void {
    this.lastRequest = this.filtersService.getRequestState();
  }
}
