console.log("Hello, World!");
let firstname: string = "Alice";
let age: number = 20;

if (age < 100) {
    age += 5;
}
console.log(age);



// function render(document: any)
function render(document) {
    console.log(document);
}


//let numbers: number[] = [1, 2, 3, 4, 5];
let numbers: number[];
numbers = [1, 2, 3, 4, 5];

numbers[0] = 10;


let user: [string, number];
user = ["Alice", 30];
user.push(1);


let users: [string, number, boolean, number][];
users = [["Alice", 30, true, 1]];
users.push(["Bob", 25, false, 2]);



const small = 1;
const medium = 2;
const large = 3;

//enum Size {small=1, medium=2, large=3}

enum Size {small, medium, large}

let mySize: Size = Size.medium;
console.log(mySize);


enum Sizes {SSmall=1, Mmedium=2, Llarge=3}
let mySizes: Sizes = Sizes.Mmedium;
console.log(mySizes);