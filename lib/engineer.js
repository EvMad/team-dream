const inquirer = require("inquirer");
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(gitHub) {
        this.super(name, id, email);
        this.gitHub = gitHub;
        
    }

    getGit() {
        return this.gitHub;
    }


}

module.exports = Engineer;