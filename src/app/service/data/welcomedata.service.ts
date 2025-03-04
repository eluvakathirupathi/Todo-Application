import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

class HelloWorldBean{
  constructor(public message: string){
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeWelcomeBean(){
    // console.log("from service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

  }
  executeWelcomeBeanwithPath(name: string){
    let basicAuthHead = this.createBasicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHead
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`,{headers});
  }

  createBasicAuthHttpHeader(){
    let username ='thiru'
    let password = 'pass'

    let basicAuthHead = 'Basic '+window.btoa(`${username}:${password}`)
    return basicAuthHead
  }

}
