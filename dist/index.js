console.log("Hello, World!");
let firstname = "Alice";
let age = 20;
if (age < 100) {
    age += 5;
}
console.log(age);
function render(document) {
    console.log(document);
}
let numbers;
numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
let user;
user = ["Alice", 30];
user.push(1);
let users;
users = [["Alice", 30, true, 1]];
users.push(["Bob", 25, false, 2]);
const small = 1;
const medium = 2;
const large = 3;
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
export {};
//# sourceMappingURL=index.js.map