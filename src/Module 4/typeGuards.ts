//
const add = (
	number1: number | string,
	number2: number | string
): number | string => {
	if (typeof number1 === "number" && typeof number2 == "number") {
		return number1 + number2;
	} else {
		return number1.toString() + number2.toString();
	}
};

// in
type la_majahabi = {
	name: string;
};

type hanafi = {
	name: string;
	majhav: "Hanafi";
};

let fatwa = (user: la_majahabi | hanafi): string => {
	if ("majhav" in user) {
		return "Hat uthabe na , aste amin bolbe";
	} else {
		return "Hat uthabe , jore amin bolbe";
	}
};

//in
const user1: la_majahabi = {
	name: "Salaf",
};
const user2: hanafi = {
	name: "Salaf",
	majhav: "Hanafi",
};

console.log(fatwa(user1));
console.log(fatwa(user2));

//

//instaceof guard

class AnimalClass {
	constructor(public name: string, public spicies: string) {}

	makeSound() {
		return "Hi HI";
	}
}

class catClass extends AnimalClass {
	constructor(public name: string, public spicies: string) {
		super(name, spicies);
	}

	makeMewaw() {
		return "Mewae";
	}
}

class dogClass extends AnimalClass {
	constructor(public name: string, public spicies: string) {
		super(name, spicies);
	}

	makeDog() {
		return "Gheu gheu";
	}
}



// 

const getAnimal = (animal: AnimalClass) => {
	if (animal instanceof dogClass) {
		animal.makeDog();
	} else if (animal instanceof catClass) {
		animal.makeMewaw;
	} else {
		animal.makeSound;
	}
};
