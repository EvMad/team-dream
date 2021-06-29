const fs = require("fs");
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    printInfo() {
        console.log(`This employee's name is ${this.name} `);
        console.log(`${this.name} has an ID number: ${this.id}`);
        console.log(`${this.name} has an email address at ${this.email}`)
    };
}

module.exports = Employee;
