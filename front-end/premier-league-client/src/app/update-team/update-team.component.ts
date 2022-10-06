import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  id: number;
  team: Team;
  teamService: any;

 
  ngOnInit() {
    this.team = new Team();

  
    
    this.teamService.getTeam(this.id)
      .subscribe(data => {
        console.log(data)
        this.team = data;
      }, error => console.log(error));
  }

  updateTeam() {
    this.teamService.updateTeam(this.id, this.team)
      .subscribe(data => {
        console.log(data);
        this.team = new Team();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTeam();    
  }

  gotoList() {
    this.router.navigate(['/team']);
  }
}
