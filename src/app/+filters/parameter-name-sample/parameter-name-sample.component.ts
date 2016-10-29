import { Component } from '@angular/core';
import { FilterConfig, RtFiltersService, filter } from 'right-angled';

@Component({
  providers: [RtFiltersService],
  selector: 'rt-demo-parameter-name-sample',
  templateUrl: 'parameter-name-sample.component.html'
})
export class ParameterNameSampleComponent {
  public lastRequest: any = '';

  @filter public defaultField: string = null;
  @filter(<FilterConfig>{ parameterName: 'customParameterName' }) public configuredField: string = null;

  constructor(private filtersService: RtFiltersService) {
    filtersService.registerFilterTarget(this);
    this.lastRequest = this.filtersService.getRequestState();
  }
  public serializeRequest(): void {
    this.lastRequest = this.filtersService.getRequestState();
  }
  public resetSate(): void {
    this.filtersService.resetValues();
  }
}
