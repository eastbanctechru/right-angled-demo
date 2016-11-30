import { Component } from '@angular/core';
import { filter, FilterConfig, RtFiltersService } from 'right-angled';

@Component({
  providers: [RtFiltersService],
  selector: 'rt-demo-empty-is-null-sample',
  templateUrl: 'empty-is-null-sample.component.html'
})
export class EmptyIsNullSampleComponent {
  public lastRequest: any = '';

  @filter() public defaultField: string = '';
  @filter(<FilterConfig>{ emptyIsNull: true }) public configuredField: string = '';

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
