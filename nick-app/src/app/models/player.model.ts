import { Round } from "./round.model";

export interface Player {
    name:   string;
    rating: number;
    id:     number;
    rounds: Round[]
}