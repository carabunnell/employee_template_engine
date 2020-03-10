// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//require employee
//======mc=======//
const Employee = require("./Employee");
//extend class
class Engineer extends Employee {
    //constructor
//take the passed in variables: name, id, email
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;

            super ("Engineer");
        
        //what to do with these??? no clue...
    }
}

