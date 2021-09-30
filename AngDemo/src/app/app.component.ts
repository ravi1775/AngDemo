import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title: string = 'Ang Demo';



  
  inputtwowaylocal: string = '';
  inputtwoway : string = 'Hello';

  constructor()
  {}

  ReturnTitle(){
    return this.title;
  }


  checkinput()
  {
    console.log(this.inputtwoway);
    this.inputtwowaylocal = this.inputtwoway;
  }




}
