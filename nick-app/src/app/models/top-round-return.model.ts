import { Round } from "./round.model";

/**
 * Round model that includes the name of the Player.
 * Used for the top rounds list.
 * 
 * @property {Round} round - The associated Round object.
 * @property {string} playerName - The name of the Player who played the Round.
 */
export interface TopRoundReturnModel {
    /** The associated Round object */
    round: Round;
    /** The name of the Player who played the Round */
    playerName: string;
}
