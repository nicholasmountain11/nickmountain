import { Round } from "./round.model";

export interface Hole {
    par:         number;
    shots:       number;
    hole_number: number;
    round:       Round;
    id:          number;
}