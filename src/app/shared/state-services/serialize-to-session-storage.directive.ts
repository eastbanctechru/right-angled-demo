import { Directive, OnDestroy, OnInit } from '@angular/core';
import { RtListService } from 'right-angled';

import { SessionStorageStateService } from './session-storage-state-service';

@Directive({
    providers: [SessionStorageStateService],
    selector: '[rtSerializeToSessionStorage]'
})
export class SerializeToSessionStorageDirective implements OnInit, OnDestroy {
    constructor(private listService: RtListService, private stateService: SessionStorageStateService) {
    }
    public ngOnInit(): void {
        this.listService.registerStateService(this.stateService);
    }
    public ngOnDestroy(): void {
        this.listService.removeStateService(this.stateService);
    }
}
