import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-basic-usage',
  templateUrl: 'basic-usage.component.html'
})
export class BasicUsageComponent {
  public countries: any[] = new Array<any>();
  constructor(public countriesService: CountriesService) {
    this.countriesService.getSomeCountries()
      .subscribe((countries) => this.countries = countries);
  }
}
