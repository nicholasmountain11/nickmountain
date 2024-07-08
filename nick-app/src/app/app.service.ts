import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './model/player.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private urlStr: string;

  constructor(private http: HttpClient) {
    this.urlStr = "http://localhost:8080"
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.urlStr}/player`)
  }

}
