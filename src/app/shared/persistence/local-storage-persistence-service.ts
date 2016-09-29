import { Injectable, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FiltersService, RtPersistenceService } from 'right-angled';

@Injectable()
export class LocalStoragePersistenceService implements RtPersistenceService {
    private internalStateKey: string;

    constructor( @Optional() @SkipSelf() private activatedRoute: ActivatedRoute) {
        this.internalStateKey = this.activatedRoute.snapshot.url.length > 0 ? this.activatedRoute.snapshot.url.map(segment => segment.path).join(':') : 'default-route';
    }

    public persistState(filtersService: FiltersService): void {
        try {
            let data = { data: filtersService.getPersistedState() };
            window.localStorage.setItem(this.internalStateKey, JSON.stringify(data));
        } catch (e) {
            // supress QUOTA_EXCEEDED_ERR because we can't do anything with it
        }
    };

    public getPersistedState(): any {
        let res = window.localStorage.getItem(this.internalStateKey);
        if (res === null) {
            return undefined;
        } else {
            return JSON.parse(res).data;
        }
    };
}
