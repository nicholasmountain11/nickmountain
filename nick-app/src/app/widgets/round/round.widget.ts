import { Component, Input } from "@angular/core";
import { Hole } from "../../models/hole.model";
import { Round } from "../../models/round.model";

@Component({
    selector: 'round-widget',
    templateUrl: './round.widget.html',
    styleUrls: ['./round.widget.css']
})
export class RoundWidget {

  /** Inputs and outputs go here */

  @Input() round!: Round;

  /** Constructor */
  constructor() { }
}