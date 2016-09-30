import { Component } from '@angular/core';
import 'rxjs/Rx';

import { AirportsService } from './shared';

@Component({
  providers: [AirportsService],
  selector: 'rt-demo-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class DemoAppComponent {
}
