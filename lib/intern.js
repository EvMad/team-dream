const inquirer = require("inquirer");
const Employee = require("./employee");

class Intern extends Employee {
    constructor(school) {
        this.super(name, id, email);
        this.school = school;
        
    }

    getSchool() {
        return this.school;
    }


}

module.exports = Intern;