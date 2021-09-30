import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: null
})
export class EmployeeService {

  constructor(private _loggerService : LoggerService) { }


  GetEmployee()
  {
     let person = [
      {"id": 1, "name": "andrew", "salary": 300},
      {"id": 2, "name":"john", "salary": 200}
     ];

     this._loggerService.AuditLog('Employee served');
     return person;
  }
}
