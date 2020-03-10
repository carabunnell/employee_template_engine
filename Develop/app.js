const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
fullTeam = [];

//my code
// Write code to use inquirer to gather information about the development team members,

    function userQuestions() {
        return inquirer.prompt([
            {
                type: "list",
                name: "initial",
                message: "Do you have an employee you'd like to register?",
                choices: ["yes", "no"]
            },
            {
                type: "list",
                name: "role",
                message: "What is your employee's role?",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is your employee's name?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your employee's email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your employee's GitHub user name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee's id number?"
            },

        ]).then(function (answers) {
            if (answers.role = "Manager") {
                const manager = new Manager(this.name, this.email, this.github, this.id);
                // manager to array.
                //console.log new array
                //prompt inquierer to start again. 
                                //     teamMembers.push(manager);
                                // // idArray.push(answers.managerId);
                                // console.log('Team Members: ' + teamMembers);
                                // console.log('Team Member ID: ' + idArray);
                                // // createTeam();
                                // promptNewMember();
            } //fullTeam.push(answers.managerName);id
            else if (answers.role = "Engineer") {
                const engineer = new Engineer(this.name, this.email, this.github, this.id);
            }
            else if (answers.role = "Intern") {
                const intern = new Intern(this.name, this.email, this.github, this.id);
            }
        })
    }
    




// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```