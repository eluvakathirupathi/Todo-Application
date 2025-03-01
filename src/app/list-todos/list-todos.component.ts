import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TododataService } from '../service/data/tododata.service';


export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public target: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  delete_message: string = "";
  // =[
  //   new Todo(1,"eat",false,new Date()),
  //   new Todo(2,"sleep",false,new Date()),
  //   new Todo(3,"drink",false,new Date())
  //   {id: 1,desc: "eat"},
  //   {id:2,desc:"sleep"},
  //   {id:3,desc:"drink"}
  // ]

  constructor(
    private todoservice: TododataService
  ) { }

  ngOnInit() {
    this.refreshTodo()
  }

  refreshTodo() {
    this.todoservice.retrieveAllTodo('thiru').subscribe(
      response => {
        // console.log(response[0].desc);
        this.todos = response;
      }
    )
  }

  deleteTodoById(id: number) {
    this.todoservice.deleteTodo("thiru", id).subscribe(
      (response: any) => {
        // console.log(response);
        this.delete_message=`Deleted todo ${id}`
        this.refreshTodo();
      }
    )
  }

}
