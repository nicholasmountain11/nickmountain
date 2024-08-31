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

    /** 
     * Array of all Players.
     * To be listed as dropdown options in form field
     * to choose which Player the new Round belongs to
     */
    @Input() players$: Player[] | undefined;
    /**
     * Event to be passed back to wii-golf component.
     * Will trigger POST request with AddRound model,
     * the model needed to add a Round to the database
     */
    @Output() addRound = new EventEmitter<AddRound>();
    /** The Player selected in the form field for who the new Round belongs to */
    player_selected: boolean = false;

    form = this.fb.group({
        player: ['', Validators.required],
        holes: this.fb.array([])
    })

    constructor(
        private fb: FormBuilder,
        protected snackbar: MatSnackBar
    ) { }

    /** Subscribe to changes in the value of the player form field */
    ngOnInit() {
        this.form.get('player')?.valueChanges.subscribe(value => {
            this.player_selected = !!value;
        });
    }

    /** Getter for holes form field */
    get holes() {
        return this.form.controls["holes"] as FormArray;
    }

    /** 
     * Gets the individual form for the Hole at index {index}
     * @param index index of the requested Hole form
     */
    getHoleFormGroup(index: number): FormGroup {
        return this.holes.at(index) as FormGroup;
    }

    /** Adds new Hole form to form array */
    addHole() {
        const holeForm = this.fb.group({
            hole_number: ['', Validators.required],
            par: ['', Validators.required],
            shots: ['', Validators.required],
        });

        this.holes.push(holeForm);
    }

    /**
     * Removes individual form for the hole at index {holeIndex}
     * @param holeIndex index of the Hole form to be deleted
     */
    deleteHole(holeIndex: number) {
        this.holes.removeAt(holeIndex);
    }

    /**
     * Turns form array of Hole forms into array of Hole models.
     * Emits addRound event AddRound model built with array of Hole 
     * models from form array and player_id from player form field
     */
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