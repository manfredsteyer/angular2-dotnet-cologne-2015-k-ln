"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var flug_suchen_component_1 = require('./flug-suchen.component');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var providers = [
    http_1.HTTP_PROVIDERS
];
platform_browser_dynamic_1.bootstrap(flug_suchen_component_1.FlugSuchen, providers);
//# sourceMappingURL=main.js.map