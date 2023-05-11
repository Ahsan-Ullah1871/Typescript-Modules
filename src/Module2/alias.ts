type CrType = {
    name: string
    age?: number;
    profession: string;
    address: string;
}

type CourseName = string;
type IsMarried = boolean;

type OperationType = (x: number, y: number) => number;


const cr1:  CrType = {
    name: "Jani na",
     profession: "Programmer",
    address: "Banglades"
}


const cr2:  CrType = {
    name: "Jani na",
    age:20,
    profession: "Programmer",
    address: "Banglades"
}


const calculate = (num1: number, num2:number, operation: OperationType) => {
    return operation(num1,num2)
}


calculate(10,20,(x,y)=>x+y)