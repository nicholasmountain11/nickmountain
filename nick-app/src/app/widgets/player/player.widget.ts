import { Component, Input } from "@angular/core";
import { Player } from "../../models/player.model";


@Component({
    selector: 'player-widget',
    templateUrl: './player.widget.html',
    styleUrls: ['./player.widget.css']
})
export class PlayerWidget {

  /** Inputs and outputs go here */

  @Input() player!: Player;

  /** Constructor */
  constructor() { }
}