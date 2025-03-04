import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private BasicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username ='thiru'
    // let password = 'pass'

    // let basicAuthHead = 'Basic '+window.btoa(`${username}:${password}`)

    let basicAuthHead=this.BasicAuthenticationService.getAuthenticatedToken();
    let username = this.BasicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHead&&username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHead
        }
      })
    }
   
    return next.handle(request);
  }
}
