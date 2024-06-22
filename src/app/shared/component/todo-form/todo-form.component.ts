import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
@ViewChild('todos')todos!:NgForm;
@Output() todoAdd:EventEmitter<Itodo> = new EventEmitter<Itodo>()
onAddTodo(){
  let todo=this.todos.value;
  this.todos.reset()
  this.todoAdd.emit(todo)
}

}
