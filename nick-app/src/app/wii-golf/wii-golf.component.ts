import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';
import { Observable } from 'rxjs';
import { PlayerWidget } from '../widgets/player/player.widget';
import { RoundWidget } from '../widgets/round/round.widget';
import { AddRound } from '../models/add-round.model';

@Component({
  selector: 'app-wii-golf',
  templateUrl: './wii-golf.component.html',
  styleUrl: './wii-golf.component.css'
})
export class WiiGolfComponent {

  players$: Player[] | undefined;
  rounds$: Round[] | undefined;


  constructor(private appService: AppService) {
    appService
      .getPlayers()
      .subscribe((players) => this.players$ = players);

    appService
      .getRounds()
      .subscribe((rounds) => this.rounds$ = rounds);
   }

  refreshPlayers() {
    this.appService
      .getPlayers()
      .subscribe((players) => (this.players$ = players));
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
        console.log('successfully called addRound from wii-golf component');
      }
    })
  }


}
