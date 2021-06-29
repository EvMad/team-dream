const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(role, officeNumber) {
        this.super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }

    getRole() {
        inquirer.prompt([{
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
             },
             {
                 type: 'list',
                 name: 'role',
                 message: 'Choose a job title:',
                 choices: ['Manager', 'Engineer', 'Intern'],
             },
        ])
    }
}

module.exports = Manager;