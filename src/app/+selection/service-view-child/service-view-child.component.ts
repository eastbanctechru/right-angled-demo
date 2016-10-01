import { Component, ViewChild } from '@angular/core';
import { SelectionAreaForDirective } from 'right-angled';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-service-view-child',
    templateUrl: 'service-view-child.component.html'
})
export class ServiceViewChildComponent {
    public countries: any;
    @ViewChild(SelectionAreaForDirective) public selectionArea: SelectionAreaForDirective;
    constructor(public countriesService: CountriesService) {
        this.countries = this.countriesService.getSomeCountries()
            .map(countries => countries.map(country => ({ name: country, selected: false })))
            .share();
    }
    public displaySelectedItems(): void {
        alertify.alert(this.selectionArea.selectionService.getSelectedElements().map((c: any) => c.name).join(';'));
    }
}
