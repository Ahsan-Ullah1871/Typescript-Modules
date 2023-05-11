//normal func


function add(num1:number,num2:number):number {
    return num1+num2
}

add(2, 2)



// arrrow
const add2 = (num1: number, num2: number): number => num1 + num2


//array

const aaar = [1, 2, 3, 4]

const sqr = aaar.map((item: number): number => item * item)


//func in object

const person: {
    name: string,
    age: number,
    money: number,
    addMoney(new_money:number):string
} = {
    name: "Ahsan",
    age: 20,
    money: 100,
    addMoney(new_money:number) {
        return `After add bew money from you ${this.money+new_money}`
    }
}
