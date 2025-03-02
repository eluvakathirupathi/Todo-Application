import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TododataService } from '../service/data/tododata.service';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todo: Todo = new Todo(-1,"",false,new Date());
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private todoservice: TododataService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if(this.id!=-1){
      this.todoservice.findTodo('thiru',this.id).subscribe(
        data => this.todo = data
      )
    }
    
  }
  updateTodoById(){
    if(this.id===-1){
      //create todo
      this.todoservice.createTodo("thiru",this.todo)
      .subscribe(
        data=> {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
    else{
      this.todoservice.updateTodo("thiru",this.id,this.todo)
    .subscribe(
      data=>{
        console.log(data)
        this.router.navigate(["todos"])
      }
    )
    }
    
  }
}
