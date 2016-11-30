import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers/ga/angulartics2-ga';
import 'rxjs/Rx';

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
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        } else {
          window.scroll(0, 0);
        }
      }
    });
  }
}
