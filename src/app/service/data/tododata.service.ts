import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http: HttpClient,
  ) { }
  retrieveAllTodo(username:string){
    return this.http.get<Todo []>(`http://localhost:8080/user/${username}/todos`)
  }
}
