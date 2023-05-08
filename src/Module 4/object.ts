class Animal {
	// name: string;
	// spices: string;
	// sound: string;

	// constructor(name: string, spices: string, sound: string) {
	// 	this.name = name;
	// 	this.spices = spices;
	// 	this.sound = sound;
	// }

	//parameter
	constructor(
		public name: string,
		public spices: string,
		public sound: string
	) {}

	// method
	makeSound() {
		console.log(`The ${this.name} says ${this.sounds}`);
	}
}

const dog = new Animal("Aduri", "kutta", "Gheu gheu");
dog.makeSound();
