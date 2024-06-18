import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';
import { Round } from '../models/round.model';

@Component({
  selector: 'app-wii-golf',
  templateUrl: './wii-golf.component.html',
  styleUrl: './wii-golf.component.css'
})
export class WiiGolfComponent implements OnInit {

  players!: Player[];
  rounds!: Round[];

  constructor(private appService: AppService) { }

  ngOnInit()  {
      this.appService.getPlayers().subscribe(data => {
        this.players = data;
      })

      this.appService.getRounds().subscribe(data => {
        this.rounds = data;
      })
  }

}
