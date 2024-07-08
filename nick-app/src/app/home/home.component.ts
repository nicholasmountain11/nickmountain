import { Component } from '@angular/core';
import { Player } from '../model/player.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  constructor(private appService: AppService) {
    // appService
    //   .getPlayers()
    //   .subscribe((players) => this.players$ = players);
  }

}
