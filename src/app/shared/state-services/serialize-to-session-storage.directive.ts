import { Directive, OnDestroy, OnInit } from '@angular/core';
import { RtList } from 'right-angled';

import { SessionStorageStateService } from './session-storage-state-service';

@Directive({
    providers: [SessionStorageStateService],
    selector: '[rtDemoSerializeToSessionStorage]'
})
export class SerializeToSessionStorageDirective implements OnInit, OnDestroy {
    constructor(private list: RtList, private stateService: SessionStorageStateService) {
    }
    public ngOnInit(): void {
        this.list.registerStateService(this.stateService);
    }
    public ngOnDestroy(): void {
        this.list.removeStateService(this.stateService);
    }
}
