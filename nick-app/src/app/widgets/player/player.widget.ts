import { Component, Input } from "@angular/core";
import { Player } from "../../models/player.model";


@Component({
    selector: 'player-widget',
    templateUrl: './player.widget.html',
    styleUrls: ['./player.widget.css']
})
export class PlayerWidget {

  @Input() player!: Player;

  constructor() { }
}