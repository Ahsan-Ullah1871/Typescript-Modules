const createArray = (param: string): string[] => {
	return [param];
};

//extands
const createGenericArray = <T extends { name: string; age: number }>(
	param: T
): T[] => {
	return [param];
};

const names = createGenericArray<{ name: string; age: number; salary: number }>(
	{
		name: "Ahsan",
		age: 19,
		salary: 100000,
	}
);

const names2 = createGenericArray<{ name: string; age: number }>({
	name: "Ahsan",
	age: 90,
});

// using keyofg

// type Person = {
//     name: string,
//     age: number,
//     isMarried:boolean
// }

const findKey = <X, Y extends keyof X>(person: X, key: Y) => {
	return person[key];
};

findKey({ name: "Ab", age: 10, isMarried: true }, "name");
