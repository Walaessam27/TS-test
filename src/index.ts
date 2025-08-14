console.log("Hello, World!");
//let firstname: string = "Alice";
let age: number = 20;

if (age < 100) {
    age += 5;
}
console.log(age);



// function render(document: any)
function render(document) {
    console.log(document);
}

render("Hello, World!");


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



// const small = 1;
// const medium = 2;
// const large = 3;

//enum Size {small=1, medium=2, large=3}

enum Size {small, medium, large}

let mySize: Size = Size.medium;
console.log(mySize);


enum Sizes {SSmall=1, Mmedium=2, Llarge=3}
let mySizes: Sizes = Sizes.Mmedium;
console.log(mySizes);


function calculateTax(income: number, taxYear: number): number {
if (taxYear === 2022) {
    return income * 0.2;
} else {
    return income * 0.25;
}
}

calculateTax(50000, 2022);


let employee: { name: string; readonly id: number; retire: (date: Date) => void } = {
    name: "Alice",
    id: 30,
    retire: (date) => {
        console.log(date);
    }
};

employee.retire(new Date());



function kgToLbs(weight: number | string): number {
    if (typeof weight === "string") {
        weight = parseFloat(weight);
    }
    return weight * 2.20462;
}

kgToLbs(70);
kgToLbs("70");
kgToLbs("70kg");
//intersection type
type draggable = {
    drag: () => void;
};

type resizable = {
    resize: () => void;
};

type UIWidget = draggable & resizable;


let textbox: UIWidget = {
    drag: () => {
        console.log("Dragging");
    },
    resize: () => {
        console.log("Resizing");
    }
};

textbox.drag();
textbox.resize();   

//literal types
type Quantity = 100 | 200 | 300;

// let quantity: Quantity = 100;
// quantity = 200;
// quantity = 300;





type Metric = {
    value: Quantity;
    unit: "cm" | "m" | "km";
}; 

let distance: Metric = {
    value: 100,
    unit: "km"
};      


console.log(distance);




//nullable types
function greet(name: string) {
    if (name) {
        console.log("Hello, " + name.toUpperCase);
    } else {
        console.log("Hello, Guest");
    }
}

greet("Alice");
greet(null);