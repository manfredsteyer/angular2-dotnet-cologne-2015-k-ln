import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';

var providers = [
  HTTP_PROVIDERS  
];

bootstrap(AppComponent, providers);
