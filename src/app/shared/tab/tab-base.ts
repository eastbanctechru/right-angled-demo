import { TabSectionComponent } from './tab-section.component';

export abstract class Tab {
  public tabTitle: string = '';
  public isActive: boolean = false;
  constructor(tabs: TabSectionComponent) {
    tabs.addTab(this);
  }
}
