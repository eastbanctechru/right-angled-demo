import { Component } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/src/providers/angulartics2-google-analytics';
import 'rxjs/Rx';

@Component({
  selector: 'rt-demo-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class DemoAppComponent {
  constructor(private angulartics2: Angulartics2, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

  }
}
