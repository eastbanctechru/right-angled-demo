import { Component } from '@angular/core';
import { filter, FilterConfig, RTFiltersService } from 'right-angled';

@Component({
  providers: [RTFiltersService],
  selector: 'rt-demo-ignore-on-auto-map-sample',
  templateUrl: 'ignore-on-auto-map-sample.component.html'
})
export class IgnoreOnAutoMapSampleComponent {
  public valueForAutoMappedField: string = 'new value';
  public valueForIgnoredField: string = 'new value';
  @filter() public autoMappedField: string = 'current value';
  @filter(<FilterConfig>{ ignoreOnAutoMap: true })
  public ignoredField: string = 'current value';

  constructor(private filtersService: RTFiltersService) {
    filtersService.registerFilterTarget(this);
    this.filtersService.getRequestState();
  }
  public applyParams(): void {
    this.filtersService.applyParams({
      autoMappedField: this.valueForAutoMappedField,
      ignoredField: this.valueForIgnoredField
    });
  }
}
