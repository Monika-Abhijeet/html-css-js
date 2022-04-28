"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello Monika! whats up? how are you doing";
console.log(message);
var num1 = 10;
var name = "Monika";
var isPresent = true;
var fruits = ["apple", "mango", "grapes"];
var vegetables = ["apple", "mango", "grapes"];
var phoneNumber;
var randomValue;
randomValue = 10;
randomValue = "monika";
randomValue = true;
var myVar;
myVar = 10;
myVar = "monika";
console.log(myVar);
var a = 10;
var b;
b = 20;
function add(num1, num2) {
    return num1 + num2;
}
function optionalAdd(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// function defaultAdd(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }
var defaultAdd = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
console.log(add(2, 5));
console.log(optionalAdd(2));
console.log(defaultAdd(5, 5));
// console.log(add(2, "5"));
var fullName = function (person) {
    console.log("My name is ".concat(person.firstName, " ").concat(person.lastName, " and email is ").concat(person.email));
};
var doctor = function (doctor, doctorDetails) {
    console.log("doctor name is ".concat(doctor.firstName, " and speciality is ").concat(doctorDetails.speciality));
};
var personName = {
    firstName: "Monika",
    lastName: "abhijeet",
    email: "abc@gmail.com",
    phoneNumber: 12345
};
var doctorA = {
    firstName: "John",
    lastName: "doe",
    email: "abc@gmail.com",
    phoneNumber: 123
};
var docDetails = {
    doctorId: 12,
    speciality: "Heart",
    hospitalName: "ABCD hospital"
};
fullName(personName);
doctor(doctorA, docDetails);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.empName));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager is delegating work", this.empName);
    };
    return Manager;
}(Employee));
var employee1 = new Employee("Monika");
// console.log(employee1.empName);
employee1.greet();
var m1 = new Manager("Adam");
// console.log(m1.empName);
m1.greet();
m1.delegateWork();
