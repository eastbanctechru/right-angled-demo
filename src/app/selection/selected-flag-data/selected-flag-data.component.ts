import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-selected-flag-data',
  templateUrl: 'selected-flag-data.component.html'
})
export class SelectedFlagDataComponent {
  public countries: any[] = new Array<any>();
  constructor(public countriesService: CountriesService) {
    this.countriesService.getSomeCountries()
      .subscribe((countries) => this.countries = countries.map((country) => ({ name: country.name, selected: false })));
  }
}
