import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Player } from "../../models/player.model";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Hole } from "../../models/hole.model";
import { AddRound } from "../../models/add-round.model";
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
    selector: 'new-round-widget',
    templateUrl: './new-round.widget.html',
    styleUrls: ['./new-round.widget.css']
})
export class NewRoundWidget implements OnInit {

    @Input() players$: Player[] | undefined;
    @Output() addRound = new EventEmitter<AddRound>();

    player_selected: boolean = false;

    form = this.fb.group({
        player: ['', Validators.required],
        holes: this.fb.array([])
    })

    constructor(
        private fb: FormBuilder,
        protected snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        this.form.get('player')?.valueChanges.subscribe(value => {
            this.player_selected = !!value;
        });
    }

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
            shots: ['', Validators.required],
        });

        this.holes.push(holeForm);
    }

    deleteHole(holeIndex: number) {
        this.holes.removeAt(holeIndex);
    }

    addRoundFromForm() {

        let hole_list: Hole[] = []
        this.holes.getRawValue().map((hole) => {
            hole_list.push({
                hole_number: hole.hole_number,
                par: hole.par,
                shots: hole.shots,
            });
        })

        this.addRound.emit({
            holes: hole_list,
            player_id: +this.form.value.player!,
        })

        this.form.reset()

        this.snackbar.open(
            'New round added',
            '',
            { duration: 4000 }
        );
    }


}