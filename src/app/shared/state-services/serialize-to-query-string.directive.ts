import { Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { RtList } from 'right-angled';

import { QueryStringStateService } from './query-string-state-service';

@Directive({
  providers: [QueryStringStateService],
  selector: '[rtDemoSerializeToQueryString]'
})
export class SerializeToQueryStringDirective implements OnInit, OnDestroy, OnChanges {
  @Input('rtDemoSerializeToQueryString') public serializationKey: string;
  constructor(private list: RtList, private stateService: QueryStringStateService) {
  }
  public ngOnInit(): void {
    this.list.registerStateService(this.stateService);
  }
  public ngOnDestroy(): void {
    this.list.removeStateService(this.stateService);
  }
  public ngOnChanges(changes: { serializationKey?: SimpleChange }): void {
    if (changes.serializationKey && changes.serializationKey.currentValue) {
      this.stateService.serializationKey = changes.serializationKey.currentValue;
    }
  }
}
