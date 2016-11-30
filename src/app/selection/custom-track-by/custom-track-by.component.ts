import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-custom-track-by',
  templateUrl: 'custom-track-by.component.html'
})
export class CustomTrackByComponent {
  public countries: any = [];
  constructor(public countriesService: CountriesService) {
    this.reload();
  }
  public reload(): void {
    this.countries = [];
    this.countriesService
      .getSomeCountries(5, 700)
      .subscribe((countries) => this.countries = countries);
  }
  public trackByName(index: number, country: any): string {
    return country.name;
  }
}
