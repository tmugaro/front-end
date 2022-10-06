import { Team } from '../team';
import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { TeamListComponent } from '../team-list/team-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: number;
  team: Team;

  constructor(private route: ActivatedRoute,private router: Router,
    private teamService: TeamService) { }

  ngOnInit() {
    this.team = new Team();

    this.id = this.route.snapshot.params['id'];
    
    this.teamService.getTeam(this.id)
      .subscribe(data => {
        console.log(data)
        this.team = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['team']);
  }
}
