const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const util = require("util");
const { resolveTestEnvironment } = require("jest-resolve");
const Engineer = require("./lib/engineer");
const { choices } = require("yargs");
const people = [];

const writeFileAsync = util.promisify(fs.writeFile);

let promptManager = () => {
    console.log("Welcome manager, to the team builder!");
 
   return inquirer.prompt([{
        type: 'input',
        name: 'firstName',
        message: 'What is your first name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
    },
    {       type: 'input',
            name: 'engineer',
            message: 'What is the first name of your engineer?',
        },
        {
            type: 'input',
            name: 'engGit',
            message: 'What is the GitHub user name of your engineer?',
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is the email address for your engineer?', 
        },
        {
            type: 'input',
            name: 'engId',
            message: 'What is the ID number for your engineer?',
        },
        {
            type: 'input',
            name: 'intName',
            message: 'What is the first name of your intern?',
        },
        {
        type: 'input',
        name: 'intId',
        message: 'What is the ID number for your intern?',
        },
        {
        type: 'input',
        name: 'intEmail',
        message: 'What is the email address for your intern?', 
        },
        {
        type: 'input',
        name: 'intSchl',
        message: 'What school does your intern attend?',
        }

])

};



//--------------------------------------------------------------------------------


    // .then(() => {if (answers.choice === "Engineer")

    // return inquirer.prompt([{

            
    //     type: 'input',
    //     name: 'engineer',
    //     message: 'What is the first name of your engineer?',
    // },
    // {
    //     type: 'input',
    //     name: 'engGit',
    //     message: 'What is the GitHub user name of your engineer?',
    // },
    // {
    //     type: 'input',
    //     name: 'engEmail',
    //     message: 'What is the email address for your engineer?', 
    // },
    // {
    //     type: 'input',
    //     name: 'engId',
    //     message: 'What is the ID number for your engineer?',
    // },


    // }]);

    // );

    // .then(() => {let engineer1 = new Engineer(answers.engineer, answers.engId, answers.engEmail, answers.engGit)
    // people.push(engineer1);
    // console.log(engineer1);
    // });

    // });



const generateCard = (answers) => {
    console.log(answers);
    
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Card Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      </head>
    
      <body>
          <div class="container-md">
              <div class="row">
                  <h1 class="text-white text-center bg-danger">My Team</h1>
              </div>
              <div class="row justify-content-center">
                <div class="card col-3">
                    <div class="card-header bg-primary text-white">
                      ${answers.firstName}
                      <h5 class="card-title bg-primary text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
                        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                      </svg>   Manager</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:${answers.id}</li>
                            <li class="list-group-item">Email:<a href="#">${answers.email}</a></li>
                            <li class="list-group-item">Office Number:${answers.office}</li>
                        </ul>
                      
                    </div>
                  </div>
    
                  <div class="card col-3">
                    <div class="card-header bg-primary text-white">
                      ${answers.engineer}
                      <h5 class="card-title bg-primary text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                      </svg>   Engineer</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:${answers.engId}</li>
                            <li class="list-group-item">Email:<a href="#">${answers.engEmail}</a></li>
                            <li class="list-group-item justify-content-center"><a href="https://github.com/${answers.engGit}" class="btn btn-primary">GitHub</a></li>
                        </ul>
                      </div>
                  </div>
    
                  <div class="card col-3">
                    <div class="card-header bg-primary text-white">
                      ${answers.intName}
                      <h5 class="card-title bg-primary text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16">
                        <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A1.99 1.99 0 0 0 8 6a1.99 1.99 0 0 0-1.112.338A2 2 0 0 0 5 5H3zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1z"/>
                      </svg>   Intern</h5>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:${answers.intId}</li>
                            <li class="list-group-item">Email:<a href="#">${answers.intEmail}</a></li>
                            <li class="list-group-item justify-content-center"><a href="#" class="btn btn-primary">School</a>${answers.intSchl}</li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
      </body>
      </html>`;}
   

const init = () => {
    promptManager()
.then((answers) => writeFileAsync("./dist/team.html", generateCard(answers)))
.then(() => console.log('Succesfully wrote to team.html'))
.catch((err) => console.error(err));

}

// const phaseTwo = () => {
//     console.log("Now let's add some employees to your team.");

//     let manager1 = new Employee('firstname', 'id', 'email');
//     people.push(manager1);
//     console.log(manager1);

//     return inquirer.prompt([{
//             type: 'list',
//             name: 'employeeSelect',
//             message: 'Choose a job title:',
//             choices: ['Engineer', 'Intern']
//     }])

//     .then(() => {if ((choice === "Engineer") {
//     inquirer.prompt([{

//             {
//                 type: 'input',
//                 name: 'engineer',
//                 message: 'What is the first name of your engineer?',
//             },
//             {
//                 type: 'input',
//                 name: 'engGit',
//                 message: 'What is the GitHub user name of your engineer?',
//             },
//             {
//                 type: 'input',
//                 name: 'engEmail',
//                 message: 'What is the email address for your engineer?', 
//             },
//             {
//                 type: 'input',
//                 name: 'engId',
//                 message: 'What is the ID number for your engineer?',
//             },

//     }])};


//     )}

  

// )
// };

init();

// let Engineer1 = new Engineer(engGit, engineer, engId, engEmail);
        // people.push(engineer1);


// phaseTwo();



//--------------------------------------

//     {
//         type: 'input',
//         name: 'git',
//         message: 'What is your GitHub user name?',
//     },
//    

//     {
//         type: 'input',
//         name: 'intName',
//         message: 'What is the first name of your intern?',
//     },
//     {
//         type: 'input',
//         name: 'intId',
//         message: 'What is the ID number for your intern?',
//     },
//     {
//         type: 'input',
//         name: 'intEmail',
//         message: 'What is the email address for your intern?', 
//     },
//   {
//     type: 'input',
//     name: 'intSchl',
//     message: 'What school does your intern attend?',
//   }

//--------------------------------------------------------------------------------------------------------

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
