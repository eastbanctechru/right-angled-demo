import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-selected-ref',
  templateUrl: 'selected-ref.component.html'
})
export class SelectedRefComponent {
  public countries: any[] = new Array<any>();
  constructor(public countriesService: CountriesService) {
    this.countriesService.getSomeCountries()
      .subscribe((countries) => this.countries = countries);
  }
}
