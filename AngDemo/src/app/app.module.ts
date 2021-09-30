import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User } from './User.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeeService } from './employee.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent, User, CreateUserComponent, EditUserComponent, PageNotFoundComponent, ParentComponent, ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, LoggerService],
  bootstrap: [ParentComponent]
})
export class AppModule { }
