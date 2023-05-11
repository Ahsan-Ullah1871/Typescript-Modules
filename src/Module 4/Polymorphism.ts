class Person {
	takeNap() {
		console.log("I am sleeping 1 hopur  ");
	}
}

class Children extends Person {
	takeNap(): void {
		console.log("I am sleeping 12hours");
	}
}
class Developer extends Person {
	takeNap(): void {
		console.log("I am sleeping 5 hours");
	}
}

//
function getNape(param: Person) {
	param.takeNap();
}

//
const p1 = new Person();
const p2 = new Children();
const p3 = new Developer();

getNape(p1);
getNape(p2);
getNape(p3);

//

class Shape {
	getArea(): number {
		return 0;
	}
}

class Circle extends Shape {
	radius: number;

	constructor(radius: number) {
		super();
		this.radius = radius;
	}

	getArea(): number {
		return Math.PI * this.radius * this.radius;
	}
}

class Rectangle extends Shape {
	height: number;
	width: number;

	constructor(height: number, width: number) {
		super();
		this.height = height;
		this.width = width;
	}

	getArea(): number {
		return this.height * this.width;
	}
}



function showArea(param: Shape){
   return  param.getArea()
}


console.log('====================================');
console.log(showArea(new Circle(2)));

console.log('====================================');