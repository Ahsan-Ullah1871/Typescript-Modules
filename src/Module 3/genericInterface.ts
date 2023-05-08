interface customerGenericInterface<T> {
	name: string;
	products: T;
}

const customer1: customerGenericInterface<string> = {
	name: "Ahsan",
	products: "Golu",
};

const customer2: customerGenericInterface<number> = {
	name: "Ahsan",
	products: 1,
};
