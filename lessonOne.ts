//declaring variables
let myName: string = "Uchenna Uzor";
let numberOfWeels: number = 4;
let isStudent: boolean = false;

//custom types

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Alli Bakare",
  age: 34,
  isStudent: false,
};

let person2: Person = {
  name: "Clinton Egbe",
  age: 31,
  isStudent: true,
  address: {
    street: "123 Ajah Road",
    city: "Lagos",
    country: "Nigeria",
  },
};

function displayInfo(person: Person) {
  if (!person.address) {
    return;
  }
  console.log(`${person.name} lives at ${person.address.street}`);
}

displayInfo(person1);
