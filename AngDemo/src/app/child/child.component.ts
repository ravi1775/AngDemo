import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  encapsulation:ViewEncapsulation.None
  
})
export class ChildComponent implements OnInit {

  @Output() public childEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit()
  {
    console.log('child component');
    console.log(this._employeeService.GetEmployee());
  }

  SendValueToParent()
  {
     this.childEmitter.emit("Hello from child");
  }

  fireFromChild()
  {
    console.log('Fired in child component');
  }


}
