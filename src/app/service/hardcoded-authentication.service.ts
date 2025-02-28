import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(user: string,pass: string){
      if(user==='thiru' && pass==='pass'){
        sessionStorage.setItem('authenticatedUser',user)
        return true;
      }
      return false;
  }
  isLoggedIn(){
    let uname=sessionStorage.getItem('authenticatedUser');
    return !(uname===null)
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
