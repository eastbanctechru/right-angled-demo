import { Component, Input, OnInit } from '@angular/core';
import { filter, ListDirective } from 'right-angled';

import { LookupsService } from '../../shared';

@Component({
  selector: 'rt-demo-filter-area',
  templateUrl: 'filter-area.component.html'
})
export class FilterAreaComponent implements OnInit {
  @Input() public list: ListDirective = null;
  @filter() public airportName: string = null;
  @filter('airportSize') public selectedAirportSize: string = null;
  @filter('airportType') public selectedAirportType: string = null;
  public airportSizes: any;
  public airportTypes: any;
  constructor(private lookupsService: LookupsService) {
  }
  public ngOnInit(): void {
    this.lookupsService.getAirportSizeLookups().subscribe((sizes) => this.airportSizes = sizes);
    this.lookupsService.getAirportTypeLookups().subscribe((types) => this.airportTypes = types);
  }
}
