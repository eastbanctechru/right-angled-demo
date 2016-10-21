import { Component, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Tab } from './tab-base';
import { TabSectionComponent } from './tab-section.component';

// google code-prettify
declare const PR: {
  prettyPrint(opt_whenDone?: Function, opt_root?: HTMLElement | HTMLDocument): string;
};

@Component({
  selector: 'rt-demo-code-tab',
  template: `
  <div [hidden]="!isActive">
    <pre>{{src | async}}</pre>
  </div>
  `
})
export class CodeTabComponent extends Tab implements OnChanges {
  public isActive: boolean;
  public baseUrl: string = 'https://raw.githubusercontent.com/fshchudlo/right-angled-demo/master/src/app/';
  public libBaseUrl: string = 'https://raw.githubusercontent.com/fshchudlo/right-angled/master/src/';
  public src: Observable<any> = Observable.empty();
  @Input() public url: string;
  @Input() public fromLib: boolean;
  constructor(tabs: TabSectionComponent, private http: Http, private elementRef: ElementRef) {
    super(tabs);
  }
  public ngOnChanges(changes: { url?: SimpleChange, fromLib: SimpleChange }): void {
    if (changes.url) {
      this.tabTitle = this.url.substring(this.url.lastIndexOf('/') + 1);
      this.src = this.http.get((this.fromLib ? this.libBaseUrl : this.baseUrl) + this.url)
        .map(res => {
          return res.text();
        }).do(res => {
          // this was the only way to make prettify work with dynamic rendering :(
          let timer = setInterval(() => {
            if (typeof PR !== 'undefined') {
              let pre = this.elementRef.nativeElement.querySelector('pre');
              if (pre.innerHTML) {
                pre.className = 'prettyprint';
                PR.prettyPrint(null, this.elementRef.nativeElement);
                clearInterval(timer);
              }
            }
          }, 50);
        });
    }
  }
}
