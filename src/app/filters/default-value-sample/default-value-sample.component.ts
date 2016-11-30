import { Component } from '@angular/core';
import { filter, FilterConfig, RtFiltersService } from 'right-angled';

@Component({
  providers: [RtFiltersService],
  selector: 'rt-demo-default-value-sample',
  templateUrl: 'default-value-sample.component.html'
})
export class DefaultValueSampleComponent {
  public lastRequest: any = '';

  @filter() public defaultField: string = null;
  @filter(<FilterConfig>{ defaultValue: 'abracadabra' }) public configuredField: string = null;

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
