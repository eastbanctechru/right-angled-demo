import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-select-all',
  templateUrl: 'select-all.component.html'
})
export class SelectAllComponent {
  public regions: any;
  constructor(public countriesService: CountriesService) {
    this.regions = this.countriesService.getRegionsWithCountriesAndAirports();
  }
}
