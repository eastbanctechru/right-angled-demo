/* tslint:disable no-console */
// tslint:disable-next-line:no-require-imports no-var-requires
const compression = require('compression');

import { enableProdMode } from '@angular/core';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as path from 'path';
import 'zone.js/dist/zone-node';
import './polyfills.server';

import { ServerAppModuleNgFactory } from '../compiled/src/app/server.app.module.ngfactory';
import { UNIVERSAL_PORT } from '../constants';
import { routes } from './server.routes';

enableProdMode();
const app = express();
const baseUrl = `http://localhost:${UNIVERSAL_PORT}`;

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use(compression());
app.use('/', express.static('dist', { index: false }));
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));

routes.forEach((route) => {
  app.get('/' + route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req,
      res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.listen(UNIVERSAL_PORT, () => {
  console.log(`Listening at ${baseUrl}`);
});
