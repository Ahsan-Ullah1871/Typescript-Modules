class Counter {
	static counter: number = 0;

	// constructor(counter: number)
	// {
	//     this.counter = counter
	// }

	static increment() {
		return (Counter.counter += 1);
	}
	decrement() {
		return (Counter.counter -= 1);
	}
}

const increment0 = new Counter();
const increment1 = new Counter();

console.log(Counter.increment());

console.log(Counter.increment());

