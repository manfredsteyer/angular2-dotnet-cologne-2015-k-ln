"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var providers = [
    http_1.HTTP_PROVIDERS
];
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, providers);
//# sourceMappingURL=main.js.map