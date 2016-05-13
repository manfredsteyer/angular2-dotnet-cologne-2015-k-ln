import {bootstrap}    from '@angular/platform-browser-dynamic';
import {FlugSuchen} from './flug-suchen.component';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';

var providers = [ // DI-Config
  HTTP_PROVIDERS  
];

bootstrap(FlugSuchen, providers);
