import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'rt-demo-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class DemoAppComponent {
  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
