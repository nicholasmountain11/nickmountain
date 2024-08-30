import { Hole } from "./hole.model";
/**
 * Model used to add a Round to the database.
 * Contains a list of associated Holes and the player_id of the Player
 * who played the Round.
 * 
 * @property {Hole[]} holes - An array of Hole objects representing each hole played in the Round.
 * @property {number} player_id - The unique identifier of the Player who played the Round.
 */
export interface AddRound {
    /** An array of Hole objects representing each hole played in the Round */
    holes: Hole[];
    /** ID of the Player who played the Round */
    player_id: number;
}
