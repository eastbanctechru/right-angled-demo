import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Tab } from './tab-base';
import { TabSectionComponent } from './tab-section.component';

@Component({
  selector: 'rt-demo-code-tab',
  template: `
  <div [hidden]="!isActive">
    <div [hidden]="contentReady" class="spinner"></div>
    <pre [hidden]="!contentReady"></pre>
  </div>
  `
})
export class CodeTabComponent extends Tab implements OnChanges {
  public isActive: boolean;
  public contentLoadStarted: boolean = false;
  public contentReady: boolean = false;
  public baseUrl: string = 'https://raw.githubusercontent.com/eastbanctechru/right-angled-demo/master/src/app/';
  public src: Observable<any> = Observable.empty();
  @Input() public url: string;
  constructor(private tabSection: TabSectionComponent, private http: Http, private elementRef: ElementRef) {
    super();
  }
  public activate(): void {
    super.activate();
    if (!this.contentLoadStarted) {
      this.contentLoadStarted = true;
      this.http.get(this.baseUrl + this.url)
        .map((res) => {
          return res.text();
        }).subscribe((res) => {
          let pre = this.elementRef.nativeElement.querySelector('pre');
          const ext = this.url.substring(this.url.lastIndexOf('.') + 1).replace('tsfake', 'ts').toLowerCase();
          const lang = ext === 'ts' ? 'typescript' : 'html';
          pre.innerHTML = Prism.highlight(res, Prism.languages[lang]);
          this.contentReady = true;
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
