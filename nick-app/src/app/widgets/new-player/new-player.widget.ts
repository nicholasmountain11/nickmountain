import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Player } from "../../models/player.model";
import { FormBuilder, Validators } from "@angular/forms";


@Component({
    selector: 'new-player-widget',
    templateUrl: './new-player.widget.html',
    styleUrls: ['./new-player.widget.css']
})
export class NewPlayerWidget {

    @Output() registerPlayer = new EventEmitter<Player>();

    registerForm = this.fb.group({
        name: ['', Validators.required],
        rating: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })


    constructor(
        private fb: FormBuilder,
    ) { }

    onSubmit() {
        this.registerPlayer.emit({
            name: this.registerForm.value.name!,
            rating: +this.registerForm.value.rating!,
        })

        this.registerForm.reset()

        window.alert('Hello?')
    }

}