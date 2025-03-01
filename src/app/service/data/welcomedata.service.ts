import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`);
  }

}
