import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'rt-demo-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class DemoAppComponent {
  constructor(router: Router, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
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
            element.scrollIntoView();
            return;
          }
        }
        window.scroll(0, 0);
      }
    });
  }
}
