import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class LoggerService {

  constructor() { }

  AuditLog(value: string)
  {
    console.log(value);
  }

 
}
