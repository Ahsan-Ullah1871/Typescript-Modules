//1
const makePromise = (): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const data: string = "Hello world bd";

		if (data) {
			resolve(data);
		} else {
			reject("Failed to load ");
		}
	});
};
const fetchPromiseData = async (): Promise<void> => {
	const data = await makePromise();

	console.log("====================================");
	console.log(data);
	console.log("====================================");
};

//2
type PromiseType = {
	name: string;
	age: number;
	isMarried: boolean;
};

const makePromise2 = (): Promise<PromiseType> => {
	return new Promise<PromiseType>((resolve, reject) => {
		const data: PromiseType = {
			name: "AH",
			age: 22,
			isMarried: true,
		};

		if (data) {
			resolve(data);
		} else {
			reject("Failed to load ");
		}
	});
};

const fetchPromiseData2 = async (): Promise<PromiseType> => {
	const data = await makePromise2();

	return data;
};
