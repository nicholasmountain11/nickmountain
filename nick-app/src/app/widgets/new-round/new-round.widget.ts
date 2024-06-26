import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Player } from "../../models/player.model";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Round } from "../../models/round.model";
import { AddRound } from "../../models/add-round.model";


@Component({
    selector: 'new-round-widget',
    templateUrl: './new-round.widget.html',
    styleUrls: ['./new-round.widget.css']
})
export class NewRoundWidget {

    @Input() players$: Player[] | undefined;
    @Output() addRound = new EventEmitter<AddRound>(); 

    form = this.fb.group({
        player: ['', Validators.required],
        holes: this.fb.array([])
    })

    constructor(
        private fb: FormBuilder,
    ) { }

    get holes() {
        return this.form.controls["holes"] as FormArray;
    }

    getHoleFormGroup(index: number): FormGroup {
        return this.holes.at(index) as FormGroup;
    }

    addHole() {
        const holeForm = this.fb.group({
            hole_number: ['', Validators.required],
            par: ['', Validators.required],
            shots:['', Validators.required],
        });

        this.holes.push(holeForm);
    }

    deleteHole(holeIndex: number) {
        this.holes.removeAt(holeIndex);
    }


}