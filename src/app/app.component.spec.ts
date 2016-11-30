/* tslint:disable: max-line-length */
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DemoAppComponent } from './app.component';
import { APP_IMPORTS } from './app.imports';
import { appRoutes } from './app.routing';

import 'rxjs/add/operator/takeUntil';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoAppComponent],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        APP_IMPORTS
      ],
      providers: []
    });
  });

  it('should contain license details', async(() => {
    const fixture = TestBed.createComponent(DemoAppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toContainText('Code licensed under');
  }));

});
