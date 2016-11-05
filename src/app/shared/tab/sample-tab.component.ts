import { Component } from '@angular/core';

import { Tab } from './tab-base';
import { TabSectionComponent } from './tab-section.component';

@Component({
  selector: 'rt-demo-sample-tab',
  template: `
  <div [hidden]="!isActive">
    <ng-content></ng-content>
  </div>
  `
})
export class SampleTabComponent extends Tab {
  public isActive: boolean;
  public tabTitle: string = 'Live demo';
  constructor(tabSection: TabSectionComponent) {
    super();
    tabSection.addTab(this);
  }
}
