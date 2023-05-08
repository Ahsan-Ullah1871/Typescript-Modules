// const rollNumbers:number[]= [12,1,23,44]
// const rollNumbers2:string[]= ["12","1","23",""]
// const rollNumbers3: boolean[] = [true, false]

//
// const rollNumbers: Array<number> = [12, 1, 23, 44];
// const rollNumbers2: Array<string> = ["12", "1", "23", ""];

// const rollNumbers3: Array<boolean> = [true, false];

//Generic
type GenericType<T> = Array<T>;
type GenericType2<X, Y> = [X, Y];

const rollNumbers: GenericType<number> = [12, 1, 23, 44];
const rollNumbers2: GenericType<string> = ["12", "1", "23", ""];
const rollNumbers3: GenericType<boolean> = [true, false];
// const rollNumbersList: GenericType<{ name: string; age: number }> = [
// 	{ name: "Hello", age: 12 },
// 	{ name: "Tets", age: 12 },
// ];

type std = { name: string; age: number };

const rollNumbersList: GenericType<std> = [
	{ name: "Hello", age: 12 },
	{ name: "Tets", age: 12 },
];

