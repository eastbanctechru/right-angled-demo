import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-selected-flag',
  templateUrl: 'selected-flag.component.html'
})
export class SelectedFlagComponent {
  public countries: any[] = new Array<any>();
  constructor(public countriesService: CountriesService) {
    this.countriesService.getSomeCountries()
      .subscribe((countries) => this.countries = countries);
  }
}
