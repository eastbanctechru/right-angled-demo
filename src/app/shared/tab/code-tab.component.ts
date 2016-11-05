import { Component, ElementRef, Input, OnChanges } from '@angular/core';
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
    <div [hidden]="contentReady" class="spinner"></div>
    <pre [hidden]="!contentReady">{{src | async}}</pre>
  </div>
  `
})
export class CodeTabComponent extends Tab implements OnChanges {
  public isActive: boolean;
  public contentLoadStarted: boolean = false;
  public contentReady: boolean = false;
  public baseUrl: string = 'https://raw.githubusercontent.com/fshchudlo/right-angled-demo/master/src/app/';
  public libBaseUrl: string = 'https://raw.githubusercontent.com/fshchudlo/right-angled/master/src/';
  public src: Observable<any> = Observable.empty();
  @Input() public url: string;
  @Input() public fromLib: boolean;
  constructor(private tabSection: TabSectionComponent, private http: Http, private elementRef: ElementRef) {
    super();
  }
  public activate(): void {
    super.activate();
    if (!this.contentLoadStarted) {
      this.contentLoadStarted = true;
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
                this.contentReady = true;
              }
            }
          }, 50);
        });
    }
  }
  public ngOnChanges(changes: any): void {
    if (changes.url && !this.tabTitle) {
      this.tabTitle = this.url.substring(this.url.lastIndexOf('/') + 1).replace('tsfake', 'ts');
      this.tabSection.addTab(this);
    }
  }
}
