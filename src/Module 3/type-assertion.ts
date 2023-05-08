// let test: any;

// test = "Hello";

// (test as string).concat("Hello");

// function

const multiple = (number1: number | string): number | string | undefined => {
	if (typeof number1 === "number") {
		return number1 * number1;
	} else if (typeof number1 === "string") {
		return `${parseInt(number1) * parseInt(number1)} test`;
	}
};

let test1 = multiple(123) as number;
let test2 = multiple("123") as number;

function getArrayItem<T, K extends keyof T>(
	arr: T[],
	index: number,
	key: K
): T[K] {
	const item = arr[index];

	return item[key];
}

const users = [
	{ name: "John", age: 30 },
	{ name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));

