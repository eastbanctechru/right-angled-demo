import { Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { RtListService } from 'right-angled';

import { QueryStringStateService } from './query-string-state-service';

@Directive({
    providers: [QueryStringStateService],
    selector: '[rtSerializeToQueryString]'
})
export class SerializeToQueryStringDirective implements OnInit, OnDestroy, OnChanges {
    @Input('rtSerializeToQueryString') public serializationKey: string;
    constructor(private listService: RtListService, private stateService: QueryStringStateService) {
    }
    public ngOnInit(): void {
        this.listService.registerStateService(this.stateService);
    }
    public ngOnDestroy(): void {
        this.listService.removeStateService(this.stateService);
    }
    public ngOnChanges(changes: { serializationKey?: SimpleChange }): void {
        if (changes.serializationKey && changes.serializationKey.currentValue) {
            this.stateService.serializationKey = changes.serializationKey.currentValue;
        }
    }
}
