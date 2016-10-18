import { Directive, OnDestroy, OnInit } from '@angular/core';
import { RtList } from 'right-angled';

import { LocalStorageStateService } from './local-storage-state-service';

@Directive({
    providers: [LocalStorageStateService],
    selector: '[rtSerializeToLocalStorage]'
})
export class SerializeToLocalStorageDirective implements OnInit, OnDestroy {
    constructor(private list: RtList, private stateService: LocalStorageStateService) {
    }
    public ngOnInit(): void {
        this.list.registerStateService(this.stateService);
    }
    public ngOnDestroy(): void {
        this.list.removeStateService(this.stateService);
    }
}
