type user = {
	name: string;
	age: number;
};

// Interface just for object type
interface IUser {
	name: string;
	age: number;
}

//extended

interface IExtendedUser extends IUser {
	role: string;
}

let user: IExtendedUser = {
	name: "Ahsan",
	role: "12",
	age: 12,
};

