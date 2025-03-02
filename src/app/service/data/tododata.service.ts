import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  retrieveAllTodo(username:string){
    return this.http.get<Todo []>(`http://localhost:8080/user/${username}/todos`)
  }

  deleteTodo(username:string,id:number){
    return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`)
  }
  findTodo(username:string,id:number){
    return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`)
  }
  updateTodo(username:string,id:number,todo:Todo){
    return this.http.put<Todo>(`http://localhost:8080/user/${username}/todos/${id}`,todo)
  }
  createTodo(username:string,todo:Todo){
    return this.http.post<Todo>(`http://localhost:8080/user/${username}/todos`,todo)
  }
  
}
