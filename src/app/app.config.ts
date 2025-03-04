// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
//     provideRouter(routes),
//     importProvidersFrom(HttpClientModule),
//   ]
// };

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';

export const appConfig: ApplicationConfig = {
providers: [importProvidersFrom(BrowserModule, FormsModule), 
provideRouter(routes),
{
    provide: HTTP_INTERCEPTORS, 
    useClass: HttpInterceptorBasicAuthService, 
    multi: true
},
provideHttpClient(withInterceptorsFromDi())]

};
