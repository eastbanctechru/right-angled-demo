import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-basic-usage',
    templateUrl: 'basic-usage.component.html'
})
export class BasicUsageComponent {
    public countries: any;
    constructor(public countriesService: CountriesService) {
        this.countries = this.countriesService.getSomeCountries()
            .map(countries => countries.map(country => ({ name: country, selected: false })))
            .share();
    }
}
