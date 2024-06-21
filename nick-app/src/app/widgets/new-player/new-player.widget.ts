import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Player } from "../../models/player.model";
import { FormBuilder, Validators } from "@angular/forms";
import { AppService } from "../../app.service";


@Component({
    selector: 'new-player-widget',
    templateUrl: './new-player.widget.html',
    styleUrls: ['./new-player.widget.css']
})
export class NewPlayerWidget {

    registerForm = this.fb.group({
        name: ['', Validators.required],
        rating: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })

    constructor(
        private appService: AppService,
        private fb: FormBuilder,
    ) { }

    onSubmit() {
        this.appService.registerPlayer({
            name: this.registerForm.value.name!,
            rating: +this.registerForm.value.rating!,
        }).subscribe();
        window.alert('Hello?')
    }

}