import { Component, Input } from '@angular/core';

import { CountriesService } from '../../countries.service';

@Component({
    selector: 'rt-demo-country-details',
    templateUrl: 'country-details.component.html'
})
export class CountryDetailsComponent {
    @Input() public country: string;
    public selected: boolean = false;
    public countryInfo: any = null;
    constructor(private countriesService: CountriesService) {
    }
    public onSelected(): void {
        this.selected = true;
        this.countryInfo = this.countriesService.getCountryInfo(this.country);
    }
    public onDeselected(): void {
        this.selected = false;
        this.countryInfo = null;
    }
}
