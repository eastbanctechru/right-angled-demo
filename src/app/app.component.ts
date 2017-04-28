import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga';

@Component({
  selector: 'rt-demo-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class DemoAppComponent {
  // hack from https://github.com/angular/angular/issues/6595#issuecomment-244232725
  constructor(router: Router, private angulartics2: Angulartics2, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        let elementId = '';
        if (tree.fragment) {
          const qsIndex = tree.fragment.indexOf('?');
          elementId = qsIndex === -1 ? tree.fragment : tree.fragment.substring(0, qsIndex);
        }
        if (tree.queryParams && tree.queryParams.section) {
          elementId = tree.queryParams.section;
        }
        if (elementId) {
          const element = document.querySelector('#' + elementId);
          if (element) {
            element.scrollIntoView(element);
            return;
          }
        }
        window.scroll(0, 0);
      }
    });
  }
}
