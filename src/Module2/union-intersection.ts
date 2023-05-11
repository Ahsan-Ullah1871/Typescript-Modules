type NewDeveloper = {
    name: string;

}


// Intersection
type JuniorDeveloper =NewDeveloper & {
    name: string;
    expertise: string;
    exp: number;
}

type NextLevelDeveloper =JuniorDeveloper & {
    company: string,
    salary:40|70|90|100
}



// UNINON
const newDev: NewDeveloper | JuniorDeveloper = {
    name: "Ah",
    expertise: "Javascrit",
    exp: 4,
    
}


//

const newDev2:   JuniorDeveloper = {
    name: "Ah",
    expertise: "Javascrit",
    exp: 4,
    
}


const NextDev3:   NextLevelDeveloper = {
    name: "Ah",
    expertise: "Javascrit",
    exp: 4,
    company: "Tradly",
    salary:100
    
}