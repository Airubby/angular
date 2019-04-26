import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import axios from 'axios';
import {StorageService} from './app/services/storage.service'

if (environment.production) {
  enableProdMode();
}

axios.get("./assets/serverConfig.json").then(function (r) {
  console.log(r)
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
