/**
 * Round model that includes the name of the player
 * Used for the top rounds list
 */

import { Round } from "./round.model";

export interface TopRoundReturnModel {
    round: Round;
    playerName: string;
}