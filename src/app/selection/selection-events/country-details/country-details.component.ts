import { Component, Input } from '@angular/core';

import { CountriesService } from '../../countries.service';

@Component({
  selector: 'rt-demo-country-details',
  templateUrl: 'country-details.component.html'
})
export class CountryDetailsComponent {
  @Input() public country: any;
  public selected: boolean = false;
  public loading: boolean = false;
  public countryInfo: any = null;
  constructor(private countriesService: CountriesService) {
  }
  public onSelected(): void {
    this.selected = true;
    this.loading = true;
    this.countriesService.getCountryInfo(this.country.name).subscribe((countryInfo) => {
      this.countryInfo = countryInfo;
      this.loading = false;
    });
  }
  public onDeselected(): void {
    this.selected = false;
    this.countryInfo = null;
  }
}
