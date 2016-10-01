import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-service-injection',
    templateUrl: 'service-injection.component.html'
})
export class ServiceInjectionComponent {
    public countries: any;
    constructor(public countriesService: CountriesService) {
        this.countries = this.countriesService.getSomeCountries()
            .map(countries => countries.map(country => ({ name: country, selected: false })))
            .share();
    }
}
