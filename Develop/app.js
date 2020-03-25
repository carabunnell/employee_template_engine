const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const fullTeam = [];

const writeHTMLFile = util.promisify(fs.writeFile);

managerInput();

function managerInput() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id number?"
        },

    ]).then(function (answer) {

        const manager = new Manager(answer.name, answer.email, answer.id, answer.officeNumber);
        fullTeam.push(manager);
        console.log(manager);
        engineerInput();
    })
}

function engineerInput() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id number?"
        },
    ]).then(function (answer) {
        const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github);
        fullTeam.push(engineer);
        internInput();
    });
}

function internInput() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's id number?"
        },
    ]).then(function (answer) {
        const intern = new Intern(answer.name, answer.email, answer.id, answer.school);
        fullTeam.push(intern);
        console.log(fullTeam);
        createHTML(fullTeam);
    })
    function createHTML(fullTeam) {
        const html = render(fullTeam);
        return writeHTMLFile("output/team.html", html);
    }
}