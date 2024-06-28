import { Hole } from "./hole.model";
import { Player } from "./player.model";
import { Round } from "./round.model";

export interface AddRound {
    holes: Hole[];
    player_id: number;
}