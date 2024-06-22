import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from './shared/models/studenent.interface';
import { Itodo } from './shared/models/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OurThirdApp';

 studentArry:Array<Istd>=[
        // {
        //   fname: "Jhon",
        //   lname: "Doe",
        //   email: "abc@gmail.com",
        //   contact: 123485785
        // }
]
 
onStdAd(stud:Istd){
  this.studentArry.unshift(stud)
}

// -----------------------------------------------------------------------------------------------

todoArry:Array<Itodo>=[
  // {
  //   todoItem:'Javascript'
  // }
]
 
onTodoSubmit(todos:Itodo){
  this.todoArry.unshift(todos)
}

}
