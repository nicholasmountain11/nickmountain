/**
 * Model used to GET a Round
 * This model is used as the return type
 * of a Round for a specific Player, not 
 * for the top rounds list
 */

import { Hole } from "./hole.model";

export interface Round {
    id?: number;
    holes: Hole[];
}