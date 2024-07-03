/**
 * Model used to convert a given Round's 
 * list of Holes into a table that extends horizontally,
 * rather than vertically
 */

export interface TransposedHole {
    label: string;
    values: any[];
}