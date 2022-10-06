import { TeamDetailsComponent } from './team-details/team-details.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { UpdateTeamComponent } from './update-team/update-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'team', pathMatch: 'full' },
  { path: 'team', component: TeamListComponent },
  { path: 'add', component: CreateTeamComponent },
  { path: 'update/:id', component: UpdateTeamComponent },
  { path: 'details/:id', component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
