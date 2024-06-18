import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AppService } from '../app.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  players!: Player[];

  constructor(private appService: AppService) { }

  ngOnInit() {
      this.appService.getPlayers().subscribe(data => {
        this.players = data;
      });
  }

}
