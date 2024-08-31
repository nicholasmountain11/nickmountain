import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Player } from "../../models/player.model";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: 'new-player-widget',
    templateUrl: './new-player.widget.html',
    styleUrls: ['./new-player.widget.css']
})
export class NewPlayerWidget {

    /** 
     * Event to be passed back to wii-golf component.
     * Event will trigger POST request to add Player to
     * the database
     */
    @Output() registerPlayer = new EventEmitter<Player>();

    /** Form to gather needed info about Player to be created  */
    registerForm = this.fb.group({
        name: ['', Validators.required],
    })


    constructor(
        private fb: FormBuilder,
        protected snackbar: MatSnackBar
    ) { }

    /** 
     * Emits registerPlayer event with new Player
     * built from form input. Clears form fields
     * and opens snackbar confirmation message
     */
    onSubmit() {
        this.registerPlayer.emit({
            name: this.registerForm.value.name!,
        })

        let name: string = this.registerForm.value.name!;

        this.registerForm.reset()

        this.snackbar.open(
            `New player ${name} added`,
            '',
            { duration: 4000 }
        );
    }

}