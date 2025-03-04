import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  // authenticate(user: string,pass: string){
  //     if(user==='thiru' && pass==='pass'){
  //       sessionStorage.setItem('authenticatedUser',user)
  //       return true;
  //     }
  //     return false;
  // }

  executeAuthenticationService(user:string,pass:string){
    let basicAuthHead = 'Basic '+window.btoa(`${user}:${pass}`)
  
      let headers = new HttpHeaders({
        Authorization: basicAuthHead
      })
  
      return this.http.get<AuthenticationBean>(
        `http://localhost:8080/basicauth`,
        {headers}).pipe(
          map(
            data=>{
              sessionStorage.setItem(AUTHENTICATED_USER,user)
              sessionStorage.setItem(TOKEN,basicAuthHead)
              return data;
            }
          )
        )
        ;
  }
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
    
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
    return null
  }



  isLoggedIn(){
    let uname=sessionStorage.getItem('authenticatedUser');
    return !(uname===null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean{
  constructor ( public message: string){

  }
}