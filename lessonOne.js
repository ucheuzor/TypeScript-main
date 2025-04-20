"use strict";
//declaring variables
let myName = "Uchenna Uzor";
let numberOfWeels = 4;
let isStudent = false;
let ages = [34, 31, 28];
ages.push(25);
let person1 = {
    name: "Alli Bakare",
    age: 34,
    isStudent: false,
};
let person2 = {
    name: "Clinton Egbe",
    age: 31,
    isStudent: true,
    address: {
        street: "123 Ajah Road",
        city: "Lagos",
        country: "Nigeria",
    },
};
let allUsers = [];
allUsers.push(person1);
allUsers.push(person2);
function displayInfo(person) {
    if (!person.address) {
        return;
    }
    console.log(`${person.name} lives at ${person.address.street}`);
}
displayInfo(person1);
