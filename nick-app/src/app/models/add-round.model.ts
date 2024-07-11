/**
 * Model used to add a Round to the database
 * Contains a list of associated Holes, and the player_id of the Player
 * who played the Round. 
 */

import { Hole } from "./hole.model";

export interface AddRound {
    holes: Hole[];
    player_id: number;
}