import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-selection-checkbox',
  styleUrls: ['selection-checkbox.component.css'],
  templateUrl: 'selection-checkbox.component.html'
})
export class SelectionCheckboxComponent {
  public regions: any;
  constructor(public countriesService: CountriesService) {
    this.regions = this.countriesService.getRegionsWithCountriesAndAirports();
  }
}
