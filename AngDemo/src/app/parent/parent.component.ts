import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ParentComponent implements OnInit {

//@ViewChild('divref') divrefelement : ElementRef | any;
@ViewChild('appchildref') appchildrefp : ChildComponent | undefined;
@ViewChildren('divref') divrefchildren : QueryList<ElementRef> | any;

  strval = 7;

  valuefromchild: any;
  employee : any = [];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employee = this._employeeService.GetEmployee();

    console.log(this.employee);

  }

  ngAfterInit()
  {
    console.log('viewchild');

   

  }

  changestyle()
  {
    //this.divrefelement.nativeElement.style.background = "red";

    this.divrefchildren.forEach((element :any) => {
      
      element.nativeElement.style.background = "red";
    });
      
    }

    // if(this.appchildrefp != undefined)
    // this.appchildrefp.fireFromChild();
  }

  
// Get the employee
// a. consume the api
// b. catch and map, convert the values
// c. use those values of employee list

  




