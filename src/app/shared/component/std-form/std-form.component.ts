import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/studenent.interface';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
@ViewChild('stdForm')stdForm!:NgForm
@Output() stdobj:EventEmitter<Istd>=new EventEmitter<Istd>()

onStdAdd(){
 let std = this.stdForm.value;
 this.stdForm.reset()
 this.stdobj.emit(std)
}

}
