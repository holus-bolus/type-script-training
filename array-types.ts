//We can't put in the array with the type number type string or any other types

const arr: number[] = [123];
const mixedArr: (number | string)[] = [123, '456'];

const matrix: number[][] = [[1, 2, 3], [4, 5, 6]];

//Tuples
//A tuples array can contain at least 2 values
const coorddinates: [number, number] = [60.123265, 10644556];