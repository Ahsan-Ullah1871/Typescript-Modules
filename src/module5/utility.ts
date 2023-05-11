//Pick & OMit

type PersonTypes = {
	name: string;
	age?: number;
	isMarried: boolean;
};

//pick
type name1 = Pick<PersonTypes, "age" | "isMarried">;
//Omit
type name2 = Omit<PersonTypes, "age">;



// Partial

type optional = Partial<PersonTypes>


// Requre

type required = Required<PersonTypes>



// Redonly

const Person11: Readonly<PersonTypes>  =  {
	name: "string",
	age: 123,
	isMarried: true,

};

//
Person11.age = 12