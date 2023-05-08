//

class ParentClass {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	makeSleep(hours: number): string {
		return `This ${this.name} will sleep for ${hours} hours`;
	}
}

//
class Student extends ParentClass {
	constructor(name: string, age: number, address: string) {
		super(name, age, address);
	}
}

//
class Teacher {
	name: string;
	age: number;
	address: string;
	designation: string;

	constructor(
		name: string,
		age: number,
		address: string,
		designation: string
	) {
		this.name = name;
		this.age = age;
		this.address = address;
		this.designation = designation;
	}

	makeSleep(hours: number): string {
		return `This ${this.name} will sleep for ${hours} hours`;
	}

	makeClass(numsOfClass: number): string {
		return `The ${this.designation} ${this.name} will take ${numsOfClass} classes`;
	}
}

