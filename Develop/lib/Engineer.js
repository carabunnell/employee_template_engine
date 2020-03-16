// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//require employee
//======mc=======//
const Employee = require("./Employee");
//extend class
class Engineer extends Employee {
    //constructor
//take the passed in variables: name, id, email
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    
}
module.exports = Engineer;

