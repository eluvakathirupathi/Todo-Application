import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { Router } from '@angular/router';
import { API_URL } from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  retrieveAllTodo(username:string){
    return this.http.get<Todo []>(`${API_URL}/user/${username}/todos`)
  }

  deleteTodo(username:string,id:number){
    return this.http.delete(`${API_URL}/user/${username}/todos/${id}`)
  }
  findTodo(username:string,id:number){
    return this.http.get<Todo>(`${API_URL}/user/${username}/todos/${id}`)
  }
  updateTodo(username:string,id:number,todo:Todo){
    return this.http.put<Todo>(`${API_URL}/user/${username}/todos/${id}`,todo)
  }
  createTodo(username:string,todo:Todo){
    return this.http.post<Todo>(`${API_URL}/user/${username}/todos`,todo)
  }
  
}
