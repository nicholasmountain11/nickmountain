import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { AddRound } from '../models/add-round.model';
import { TopRoundReturnModel } from '../models/top-round-return.model';

@Component({
  selector: 'app-wii-golf',
  templateUrl: './wii-golf.component.html',
  styleUrl: './wii-golf.component.css'
})
export class WiiGolfComponent {

  /** List of all Players in the database */
  players$: Player[] | undefined;

  /** List of lowest scoring Rounds in the database */
  top_rounds$: TopRoundReturnModel[] | undefined;


  constructor(private appService: AppService) {
    appService
      .getPlayers()
      .subscribe((players) => this.players$ = players);

    appService
      .getTopRounds(10)
      .subscribe((rounds) => this.top_rounds$ = rounds);
  }

  /**
   * calls getPlayers() service method to refresh the players$ field
   */
  refreshPlayers() {
    this.appService
      .getPlayers()
      .subscribe((players) => (this.players$ = players));
  }

  /**
 * calls getTopRounds() service method to refresh the top_rounds$ field
 */
  refreshTopRounds() {
    this.appService
      .getTopRounds(10)
      .subscribe((rounds) => this.top_rounds$ = rounds);
  }

  /**
   * calls registerPlayer() service method to add Player to the database
   * @param player Player to be added to the database
   */
  registerPlayer(player: Player) {
    this.appService.registerPlayer(player).subscribe({
      next: () => {
        this.refreshPlayers();
      },
      error: (error) => console.log(error)
    });
  }

  /**
 * calls addRound() service method to add Player to the database
 * @param round Round to be added to the database
 */
  addRound(round: AddRound) {
    this.appService.addRound(round).subscribe({
      next: () => {
        this.refreshPlayers();
        this.refreshTopRounds();
      },
      error: (error) => console.log(error)
    })
  }
}
