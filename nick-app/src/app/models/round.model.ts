import { Hole } from "./hole.model";
import { Player } from "./player.model";

export interface Round {
    id:     number;
    holes: Hole[];
}