import { Directive, OnDestroy, OnInit } from '@angular/core';
import { RtListService } from 'right-angled';

import { LocalStorageStateService } from './local-storage-state-service';

@Directive({
    providers: [LocalStorageStateService],
    selector: '[rtSerializeToLocalStorage]'
})
export class SerializeToLocalStorageDirective implements OnInit, OnDestroy {
    constructor(private listService: RtListService, private stateService: LocalStorageStateService) {
    }
    public ngOnInit(): void {
        this.listService.registerStateService(this.stateService);
    }
    public ngOnDestroy(): void {
        this.listService.removeStateService(this.stateService);
    }
}
