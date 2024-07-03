/**
 * Model used to GET and POST Players
 * A Player does not need to have any Rounds
 * If the Player is being POSTed, it will not have an ID
 */

import { Round } from "./round.model";

export interface Player {
    name: string;
    rating: number;
    id?: number;
    rounds?: Round[];
}