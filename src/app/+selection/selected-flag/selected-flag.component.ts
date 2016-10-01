import { Component } from '@angular/core';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-selected-flag',
    templateUrl: 'selected-flag.component.html'
})
export class SelectedFlagComponent {
    public countries: any;
    constructor(public countriesService: CountriesService) {
        this.countries = this.countriesService.getSomeCountries()
            .map(this.convertToSelectable)
            .share();
    }
    public convertToSelectable(countries: Array<string>): Array<any> {
        return countries.map(country => ({ name: country, selected: false }));
    }
}
