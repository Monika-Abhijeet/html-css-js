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

const fruits = ["Apple", "Mango", "Grapes", "Guava"];
const vegetables = ["onion", "tomato", "potato"];
const beverages = ["tea", "coffee", "milk"];

// toString()
console.log(fruits.toString());
console.log(fruits.join("/"));

// push()
fruits.push("watermelon");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

console.log(fruits[1]);

// length
console.log(fruits[fruits.length - 1]);

// concat()
console.log(fruits.concat(vegetables, beverages));

// splice()
// fruits.splice(2, 0, "banana", "kiwi", "lemon");
console.log(fruits);

// fruits.splice(2, 1);
console.log(fruits);

// slice()
const newFruit = fruits.slice(2);
console.log(newFruit);

console.log(fruits.sort());

const numbers = [17, 2, 55, 42, 3, 7];
console.log(numbers.sort());
console.log(numbers.reverse());

// square of each number
let numberArray = [1, 2, 3, 4, 5];

let squareNumbers = numberArray.map(calculateSquare);

function calculateSquare(value) {
  return value * value;
}

function compareNumbers(a, b) {
  return a - b;
}

let newNum = numbers.sort(compareNumbers);

// console.log(squareNumbers);
// var squareNumbers = [];
// for (i = 0; i < numberArray.length; i++) {
//   let a = calculateSquare(numberArray[i]);
//   squareNumbers.push(a);
// }
console.log(newNum);
// normal function
function sum(a, b) {
  return a + b;
}

multiply = (a, b) => {
  return a * b;
};

// multiply = (a, b) => a * b;
console.log(`sum is ${sum(2, 4)}`);
console.log(`product is ${multiply(2, 4)}`);

function isPositive(number) {
  return number > 0;
}

isPositive = (number) => {
  return number > 0;
};

// isPositive = number => number > 0

function randomNumber() {
  return Math.random;
}

randomNumber = () => {
  return Math.random;
};

document.addEventListener("click", function () {
  console.log("mouse clicked ");
});

document.addEventListener("click", () => {
  console.log("mouse clicked arrow");
});

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("function" + this.name);
    }, 1000);
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("arrow" + this.name);
    }, 1000);
  }
}

let person = new Person("Monika");
// console.log(this.name);
// person.printNameFunction();
// person.printNameArrow();

// Default Arguments

let guestUser = (name, courseCount = 0, age = 18) => {
  return `Hello ${name} and your course count is ${courseCount} and age is ${age}`;
};

console.log(guestUser("monika", 3, 28));
console.log(guestUser("Abhijeet", 5, 32));
console.log(guestUser("Abhijeet", 3, 32));

const alphabets = ["A", "B", "C", "D", "E", "F"];
var fruits1 = [
  "apple",
  "orange",
  "jackfruits",
  "watermelon",
  "mango",
  "grapes",
  "guava",
];
const num = [1, 2, 3, 4, 5, 6];

// a = alphabets[0];
// b = alphabets[1];

const [a, , c, ...remainingFruits] = fruits1;

console.log(`a is ${a} and and c is ${c}`);
console.log(`remaining fruits are ${remainingFruits}`);
console.log(remainingFruits);
const alphaNumeric = [...alphabets, ...num, ...fruits1];
console.log(alphaNumeric);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [add, product] = sumAndMultiply(2, 3);
console.log(add);
console.log(product);

let person1 = {
  firstName: "Monika",
  lastName: "Abhijeet",
  email: "abc@gmail.com",
  phNo: "777766676878",
  address: {
    city: "bangalore",
    state: "karnataka",
  },
};

const {
  firstName,
  email,
  address: { city },
} = person1;
// console.log(person1.firstName);
console.log(firstName, email, city);
