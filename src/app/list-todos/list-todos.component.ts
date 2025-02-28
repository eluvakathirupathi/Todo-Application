import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';


export class Todo{
  constructor(
    public id: number,
    public desc: String,
    public done: boolean,
    public target: Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,"eat",false,new Date()),
    new Todo(2,"sleep",false,new Date()),
    new Todo(3,"drink",false,new Date())
    // {id: 1,desc: "eat"},
    // {id:2,desc:"sleep"},
    // {id:3,desc:"drink"}
  ]

  ngOnInit(): void {
    
  }
}
