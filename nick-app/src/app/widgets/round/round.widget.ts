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

  /** Round object to display information about */
  @Input() round!: Round;

  /** Array of the Round's Holes sorted by hole number */
  inOrderHoles!: Hole[];
  /** 
   * Array that contains Hole info in necessary format to show table of Holes.
   * Holds three TransposedHole objects. First has label: 'Hole' and array of 
   * just hole_number values of inOrderHoles. Second has label: 'Par' and array of 
   * just par values of inOrderHoles. Third has label: 'Score' and array of 
   * just shots value of inOrderHoles.
   * 
   * This format allows for a row based table where the first column holds the label,
   * and the hole_number, par, and shots values of the Hole at inOrderHoles[i] are each
   * in the (i+1)th column of their respective rows.
   */
  transposedHoles!: TransposedHole[];
  /** String list of 1 + the indices of each hole in inOrderHoles */
  holeIndices!: string[];
  /** Label for each column in the Round table */
  displayedColumns!: string[];
  /** Sum of shots value of each Hole - sum of par value of each Hole */
  score: number = 0;

  ngOnInit() {
    this.sortHoles()
    this.transposeHoles()
    this.holeIndices = this.inOrderHoles.map((_, index) => `${index + 1}`);
    this.displayedColumns = ['label', ...this.holeIndices];
    this.setScore();
  }

  /** Sorts the round's Hole array by hole_number and stores in inOrderHoles */
  sortHoles() {
    this.inOrderHoles = this.round.holes.sort((a, b) => a.hole_number - b.hole_number)
  }

  /** Converts inOrderHoles to TransposedHole array necessary for row based table */
  transposeHoles() {
    this.transposedHoles = [
      {
        label: 'Hole',
        values: this.inOrderHoles.map(hole => hole.hole_number)
      },
      {
        label: 'Par',
        values: this.inOrderHoles.map(hole => hole.par)
      },
      {
        label: 'Score',
        values: this.inOrderHoles.map(hole => hole.shots)
      }
    ]
  }

  /**
   * Calculates Sum of shots value of each Hole - sum of par value of each Hole
   * and stores in score property
   */
  setScore() {
    this.round.holes.forEach(hole => this.score += (hole.shots - hole.par))
  }

}