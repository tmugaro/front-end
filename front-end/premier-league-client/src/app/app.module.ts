import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-team/create-team.component';
import { EmployeeDetailsComponent } from './team-details/team-details.component';
import { EmployeeListComponent } from './team-list/team-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-team/update-team.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateTeamComponent,
    TeamDetailsComponent,
    TeamListComponent,
    UpdateTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
