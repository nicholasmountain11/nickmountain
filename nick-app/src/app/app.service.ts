import { Injectable } from '@angular/core';
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

  /**
 * GET a list of all Players in the database
 * @returns Observable<Player[]>
 */
  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.urlStr}/player`)
  }

  /**
   * return a list of all the Holes for a given Round
   * @param roundId The ID of the Round being requested
   * @returns Observable<Hole[]>
   */
  public getHolesByRound(roundId: number): Observable<Hole[]> {
    return this.http.get<Hole[]>(`${this.urlStr}/getHolesByRound/${roundId}`)
  }

  /**
   * add a Player to the database
   * @param player The Player to be added to the database
   * @returns the Player that was added
   */
  public registerPlayer(player: Player) {
    return this.http.post<Player>(`${this.urlStr}/player`, player);
  }

  /**
   * Add a Round to a given Player
   * @param round AddRound object containing the Round to be added and the ID of the player to add the Round to
   * @returns the Round that was added to the database
   */
  public addRound(round: AddRound) {
    return this.http.post<Hole[]>(`${this.urlStr}/addRoundByPlayer/${round.player_id}`, round.holes);
  }

  /**
   * GETs the $$roundAmount$$ lowest scoring Rounds in the database
   * @param roundAmount The number of Rounds to GET
   * @returns Observable<TopRoundReturnModel[]>
   */
  public getTopRounds(roundAmount: number): Observable<TopRoundReturnModel[]> {
    return this.http.get<TopRoundReturnModel[]>(`${this.urlStr}/getLowestScoringRounds/${roundAmount}`);
  }
}
