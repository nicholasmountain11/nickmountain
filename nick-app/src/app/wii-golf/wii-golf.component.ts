import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-wii-golf',
  templateUrl: './wii-golf.component.html',
  styleUrl: './wii-golf.component.css'
})
export class WiiGolfComponent implements OnInit {

  players!: Player[];

  constructor(private appService: AppService) { }

  ngOnInit()  {
      this.appService.getPlayers().subscribe(data => {
        this.players = data;
      }

      )
  }

}
