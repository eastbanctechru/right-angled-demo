import { Component } from '@angular/core';

import { AirportsService } from '../../shared';

@Component({
  selector: 'rt-demo-options',
  templateUrl: 'options.component.html'
})
export class OptionsComponent {
  public horizontal: boolean = false;
  public multiple: boolean = true;
  public toggleOnly: boolean = false;
  public autoSelectFirst: boolean = false;
  public countries: any[] = [];
  constructor(public airportsService: AirportsService) {
    this.reload();
  }
  public reload(): void {
    this.countries = [];
    this.airportsService.getSomeCountries(8, 200).subscribe(countries => (this.countries = countries));
  }
}
