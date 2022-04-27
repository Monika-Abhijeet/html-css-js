// function changeColor() {
//   document.getElementById("description").style.backgroundColor = "aqua";
// }

// var a = 10;
// var b = 20;
// var c = a + b;
// var d = a * b;
// console.log("the sum is " + c + " the product is " + d);
// console.log(`the sum is ${a + b}
// The product is ${a * b}`);

// let onionPrice = 20;
// let quantity = 5;
// let total = onionPrice * quantity;
// console.log(`total is ${total}`);

// onionPrice = 30;
// quantity = 6;
// total = onionPrice * quantity;
// console.log(`total is ${total}`);

// let num1 = 10;
// let num2 = "20";

// function sum(a, b) {
//   let c = a + b;
//   return c;
// }
// function totalOnionPrice(onionPrice, quantity) {
//   return onionPrice * quantity;
// }

// let add = sum(num1, num2);
// console.log(`addition is ${add}`);
// let totalVal = totalOnionPrice(30, 7);
// console.log(`total onion cost is ${totalVal}`);

// let fruits = ["mango", "apple", "grapes"];
// let person = {
//   firstName: "Monika",
//   lastName: "Abhijeet",
//   age: 28,
// };
// let isPresent = false;
// console.log(
//   `var a has type ${typeof a} and type of fruits is ${typeof fruits}`
// );

const stringOne = "My name is Monika";
const stringTwo = "We are learning /frontend and /backend";

// charAt() => char at a specified position

console.log(stringOne.charAt(3));

// charCodeAT => unicode of a char at a specified position
console.log(stringOne.charCodeAt(0));

// concat()
console.log(stringOne.concat(stringTwo));
console.log(stringTwo.concat(stringOne));

// endsWith() => returns true or false
console.log(stringOne.endsWith("Monika"));

// startsWith() => return true or false
console.log(stringTwo.startsWith("We"));

console.log(stringTwo.startsWith("learning"));

// includes() check whether specified string is present or not
console.log(stringOne.includes("name"));
console.log(stringOne.includes("hello"));

// indexOf() =>
console.log(stringOne.indexOf("Moni"));
console.log(stringTwo.indexOf("end"));

// lastIndexOf
console.log(stringTwo.lastIndexOf("end"));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));

// slice()
console.log(stringTwo.slice(3, 9));

// split()
console.log(stringTwo.split("/"));

// substr()
console.log(stringTwo.substr(3, 9));

// toLowercase()

console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringOne.toUpperCase());

let name1 = "My name is Monika";
let name2 = "my name IS monikA";

console.log(name1.toLowerCase() === name2.toLowerCase());

// trim()

let message = "    helllo how are you       ";
let message1 = "helllo how are you";
console.log(message.trim() === message1.trim());
console.log(message.trim());

// length()

console.log(stringOne.length);
console.log(stringTwo.length);
