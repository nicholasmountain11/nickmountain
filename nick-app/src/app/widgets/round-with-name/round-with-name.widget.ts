import { Component, Input, OnInit } from "@angular/core";
import { TopRoundReturnModel } from "../../models/top-round-return.model";
import { Hole } from "../../models/hole.model";
import { TransposedHole } from "../../models/transposed-hole.model";

@Component({
    selector: 'round-with-name-widget',
    templateUrl: './round-with-name.widget.html',
    styleUrls: ['./round-with-name.widget.css']
})
export class RoundWithNameWidget implements OnInit {

    /** Inputs and outputs go here */

    @Input() round_with_name!: TopRoundReturnModel;

    inOrderHoles!: Hole[];
    transposedHoles!: TransposedHole[];
    holeIndices!: string[];
    displayedColumns!: string[];
    score: number = 0;

    ngOnInit() {
        this.sortHoles()
        this.transposeHoles()
        this.holeIndices = this.inOrderHoles.map((_, index) => `${index + 1}`);
        this.displayedColumns = ['label', ...this.holeIndices];
        this.setScore();
    }

    sortHoles() {
        this.inOrderHoles = this.round_with_name.round.holes.sort((a, b) => a.hole_number - b.hole_number)
    }

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

    setScore() {
        this.round_with_name.round.holes.forEach(hole => this.score += (hole.shots - hole.par))
    }

}