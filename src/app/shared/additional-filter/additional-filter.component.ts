import { Component, OnInit } from '@angular/core';
import { filter } from 'right-angled';

import { LookupsService } from '../data/lookups.service';

@Component({
    selector: 'rt-demo-additional-filter',
    styleUrls: ['../filter-area/filter-area.component.scss'],
    templateUrl: 'additional-filter.component.html'
})
export class AdditionalFilterComponent implements OnInit {
    @filter('regionName') public selectedRegion: string = null;
    @filter('countryName') public selectedCountry: string = null;
    @filter('cityName') public selectedCity: string = null;
    public countries: any;
    public cities: any;
    public regions: any;
    constructor(private lookupsService: LookupsService) {
    }
    public ngOnInit(): void {
        this.regions = this.lookupsService.getRegionLookups();
        this.countries = this.lookupsService.getCountryLookups(this.selectedRegion);
        this.cities = this.lookupsService.getCityLookups(this.selectedCountry);
    }
    public onRegionChanged(newValue: string): void {
        this.selectedRegion = newValue;
        this.countries = this.lookupsService.getCountryLookups(this.selectedRegion);
    }
    public onCountryChanged(newValue: string): void {
        this.selectedCountry = newValue;
        this.cities = this.lookupsService.getCityLookups(this.selectedCountry);
    }
}
