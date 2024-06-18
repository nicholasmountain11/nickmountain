import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './models/player.model';
import { Round } from './models/round.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private urlStr: string;

  constructor(private http: HttpClient) { 
    this.urlStr = "http://localhost:8080"
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.urlStr}/employees`)
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.urlStr}/player`)
 }

 public getRounds(): Observable<Round[]> {
  return this.http.get<Round[]>(`${this.urlStr}/rounds`)
 }
  
}
