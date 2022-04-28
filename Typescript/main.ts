export {};
let message = "Hello Monika! whats up? how are you doing";
console.log(message);

let num1: number = 10;
let name: string = "Monika";
let isPresent: boolean = true;
let fruits: string[] = ["apple", "mango", "grapes"];
let vegetables: Array<string> = ["apple", "mango", "grapes"];

let phoneNumber: number | string;
let randomValue: any;
randomValue = 10;
randomValue = "monika";
randomValue = true;

let myVar: unknown;
myVar = 10;
myVar = "monika";
console.log(myVar as number);

let a = 10;
let b: number;
b = 20;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function optionalAdd(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

// function defaultAdd(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }
let defaultAdd = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};
console.log(add(2, 5));
console.log(optionalAdd(2));
console.log(defaultAdd(5, 5));
// console.log(add(2, "5"));

let fullName = (person: Person) => {
  console.log(
    `My name is ${person.firstName} ${person.lastName} and email is ${person.email}`
  );
};

let doctor = (doctor: Person, doctorDetails: DoctorDetails) => {
  console.log(
    `doctor name is ${doctor.firstName} and speciality is ${doctorDetails.speciality}`
  );
};

interface DoctorDetails {
  doctorId: number;
  speciality: string;
  hospitalName: string;
}
interface Person {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  age?: number;
}

let personName = {
  firstName: "Monika",
  lastName: "abhijeet",
  email: "abc@gmail.com",
  phoneNumber: 12345,
};

let doctorA = {
  firstName: "John",
  lastName: "doe",
  email: "abc@gmail.com",
  phoneNumber: 123,
};
let docDetails = {
  doctorId: 12,
  speciality: "Heart",
  hospitalName: "ABCD hospital",
};
fullName(personName);
doctor(doctorA, docDetails);

class Employee {
  protected empName: string;

  constructor(name: string) {
    this.empName = name;
  }

  greet() {
    console.log(`Good Morning ${this.empName}`);
  }
}

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log("Manager is delegating work", this.empName);
  }
}

let employee1 = new Employee("Monika");
// console.log(employee1.empName);
employee1.greet();

let m1 = new Manager("Adam");
// console.log(m1.empName);
m1.greet();
m1.delegateWork();
