import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-basic-usage',
    templateUrl: 'basic-usage.component.html'
})
export class BasicUsageComponent {
    public countries: Array<string> = new Array<string>();
    constructor(public countriesService: CountriesService) {
        this.countriesService.getSomeCountries()
            .subscribe(countries => this.countries = countries);
    }
}
