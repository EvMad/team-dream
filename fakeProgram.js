const Employee = require("./lib/employee");

let allEmployee = [];


let employee1 = new Employee('bob', 'x32i3k', 'bob@family.com');
allEmployee.push(employee1);
let employee2 = new Employee('dave', 'ewfew', 'sdfds@family.com');
allEmployee.push(employee2);
let employee3 = new Employee('dre', 'wefre', 'dsf@family.com');
allEmployee.push(employee3);
let employee4 = new Employee('tom', 'few', 'fewf@family.com');
allEmployee.push(employee4);



console.log(allEmployee)