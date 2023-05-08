//a type is dependent another one
type a = string;
type a2 = null;
type a3 = number;

type d = a extends string ? undefined : boolean;
type d2 = a extends string ? undefined : a2 extends number ? boolean : string;
