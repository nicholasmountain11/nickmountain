import { Round } from "./round.model";

export interface Player {
    name: string;
    id?: number;
    rounds?: Round[];
}