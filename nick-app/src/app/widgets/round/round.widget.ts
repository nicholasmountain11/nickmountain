import { Component, Input, OnInit } from "@angular/core";
import { Hole } from "../../models/hole.model";
import { Round } from "../../models/round.model";
import { TransposedHole } from "../../models/transposed-hole.model";

@Component({
    selector: 'round-widget',
    templateUrl: './round.widget.html',
    styleUrls: ['./round.widget.css']
})
export class RoundWidget implements OnInit {

  /** Inputs and outputs go here */

  @Input() round!: Round;

  transposedHoles!: TransposedHole[];
  holeIndices!: string[];
  displayedColumns!: string[];
  score: number = 0;

  ngOnInit() {
    this.transposeHoles()
    this.holeIndices = this.round.holes.map((_, index) => `${index + 1}`);
    this.displayedColumns = ['label', ...this.holeIndices];
    this.setScore();
  }

  transposeHoles() {
    this.transposedHoles = [
      {
        label: 'Hole',
        values: this.round.holes.map(hole => hole.hole_number)
      },
      {
        label: 'Par',
        values: this.round.holes.map(hole => hole.par)
      },
      {
        label: 'Score',
        values: this.round.holes.map(hole => hole.shots)
      }
    ]
  }

  setScore() {
    this.round.holes.forEach(hole => this.score += (hole.shots - hole.par))
  }

}