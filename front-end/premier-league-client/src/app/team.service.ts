import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/team';

  constructor(private http: HttpClient) { }

  getTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTeam(team: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, team);
  }

  updateTeam(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTeamList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
