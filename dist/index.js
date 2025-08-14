console.log("Hello, World!");
let age = 20;
if (age < 100) {
    age += 5;
}
console.log(age);
function render(document) {
    console.log(document);
}
render("Hello, World!");
let numbers;
numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
let user;
user = ["Alice", 30];
user.push(1);
let users;
users = [["Alice", 30, true, 1]];
users.push(["Bob", 25, false, 2]);
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
let mySize = Size.medium;
console.log(mySize);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SSmall"] = 1] = "SSmall";
    Sizes[Sizes["Mmedium"] = 2] = "Mmedium";
    Sizes[Sizes["Llarge"] = 3] = "Llarge";
})(Sizes || (Sizes = {}));
let mySizes = Sizes.Mmedium;
console.log(mySizes);
function calculateTax(income, taxYear) {
    if (taxYear === 2022) {
        return income * 0.2;
    }
    else {
        return income * 0.25;
    }
}
calculateTax(50000, 2022);
let employee = {
    name: "Alice",
    id: 30,
    retire: (date) => {
        console.log(date);
    }
};
employee.retire(new Date());
function kgToLbs(weight) {
    if (typeof weight === "string") {
        weight = parseFloat(weight);
    }
    return weight * 2.20462;
}
kgToLbs(70);
kgToLbs("70");
kgToLbs("70kg");
let textbox = {
    drag: () => {
        console.log("Dragging");
    },
    resize: () => {
        console.log("Resizing");
    }
};
textbox.drag();
textbox.resize();
let distance = {
    value: 100,
    unit: "km"
};
console.log(distance);
export {};
//# sourceMappingURL=index.js.map