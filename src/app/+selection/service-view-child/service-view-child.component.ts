import { Component, ViewChild } from '@angular/core';

import { SelectionAreaDirective } from 'right-angled';

import { CountriesService } from '../countries.service';

@Component({
    selector: 'rt-demo-service-view-child',
    templateUrl: 'service-view-child.component.html'
})
export class ServiceViewChildComponent {
    @ViewChild(SelectionAreaDirective) public selectionArea: SelectionAreaDirective;
    public countries: Array<any> = new Array<any>();
    constructor(public countriesService: CountriesService) {
        this.countriesService.getSomeCountries()
            .subscribe(countries => this.countries = countries.map(country => ({ name: country, selected: false })));
    }
    public displaySelectedItems(): void {
        alertify.alert(this.selectionArea.selectionService.getSelectedElements().map((c: any) => c.name).join(';'));
    }
}
