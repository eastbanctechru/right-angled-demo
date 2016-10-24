import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
  selector: 'rt-demo-options',
  styleUrls: ['options.component.scss'],
  templateUrl: 'options.component.html'
})
export class OptionsComponent {
  public horizontal: boolean = false;
  public multiple: boolean = true;
  public toggleOnly: boolean = false;
  public autoSelectFirst: boolean = false;
  public countries: Array<any> = [];
  constructor(public countriesService: CountriesService) {
    this.reload();
  }
  public reload(): void {
    this.countries = [];
    this.countriesService.getSomeCountries(8, 500)
      .subscribe(countries => this.countries = countries);
  }
}
