import { TeamDetailsComponent } from '../team-details/team-details.component';
import { Observable } from "rxjs";
import { TeamService } from "../team.service";
import { Team } from "../team";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"]
})
export class TeamListComponent implements OnInit {
  team: Observable<Team[]>;
  teamService: any;

  constructor(private teamService: TeamService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.team = this.teamService.getTeamList();
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeam(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  teamDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateTeam(id: number){
    this.router.navigate(['update', id]);
  }
}
