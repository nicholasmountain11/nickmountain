/**
 * Model used to convert a given Round's list of Holes into a table
 * that extends horizontally, rather than vertically. Each TransposedHole will represent one of the rows
 * Hole, Par, or Shots in a Round table.
 * 
 * @property {string} label - The title of the row: Hole, Par or Shots.
 * @property {any[]} values - An array of values associated with the label ex) if label = 'Shots', 
 * values = [Hole 1 shots, Hole 2 shots, ...].
 */
export interface TransposedHole {
    /** The title of the row: Hole, Par or Shots */
    label: string;
    /** An array of values associated with the label ex) if label = 'Shots', 
    * values = [Hole 1 shots, Hole 2 shots, ...] 
    */
    values: any[];
}
