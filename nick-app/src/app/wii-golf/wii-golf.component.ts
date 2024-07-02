import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';
import { Observable } from 'rxjs';
import { PlayerWidget } from '../widgets/player/player.widget';
import { RoundWidget } from '../widgets/round/round.widget';
import { AddRound } from '../models/add-round.model';
import { TopRoundReturnModel } from '../models/top-round-return.model';

@Component({
  selector: 'app-wii-golf',
  templateUrl: './wii-golf.component.html',
  styleUrl: './wii-golf.component.css'
})
export class WiiGolfComponent {

  players$: Player[] | undefined;

  top_rounds$: TopRoundReturnModel[] | undefined;


  constructor(private appService: AppService) {
    appService
      .getPlayers()
      .subscribe((players) => this.players$ = players);

    appService
      .getTopRounds(10)
      .subscribe((rounds) => this.top_rounds$ = rounds);
  }

  refreshPlayers() {
    this.appService
      .getPlayers()
      .subscribe((players) => (this.players$ = players));
  }

  refreshTopRounds() {
    this.appService
      .getTopRounds(10)
      .subscribe((rounds) => this.top_rounds$ = rounds);
  }

  registerPlayer(player: Player) {
    this.appService.registerPlayer(player).subscribe({
      next: () => {
        this.refreshPlayers();
      }
    });
  }

  addRound(round: AddRound) {
    this.appService.addRound(round).subscribe({
      next: () => {
        this.refreshPlayers();
        this.refreshTopRounds();
      }
    })
  }



}
