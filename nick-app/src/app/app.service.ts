import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './models/player.model';
import { Round } from './models/round.model';
import { Hole } from './models/hole.model';
import { AddRound } from './models/add-round.model';
import { TopRoundReturnModel } from './models/top-round-return.model';

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

  public getHolesByRound(roundId: number): Observable<Hole[]> {
    return this.http.get<Hole[]>(`${this.urlStr}/getHolesByRound/${roundId}`)
  }

  public registerPlayer(player: Player) {
    return this.http.post<Player>(`${this.urlStr}/player`, player);
  }

  public addRound(round: AddRound) {
    return this.http.post<Hole[]>(`${this.urlStr}/addRoundByPlayer/${round.player_id}`, round.holes);
  }

  public getTopRounds(roundAmount: number): Observable<TopRoundReturnModel[]> {
    return this.http.get<TopRoundReturnModel[]>(`${this.urlStr}/getLowestScoringRounds/${roundAmount}`);
  }
}
