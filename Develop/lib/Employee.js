// TODO: Write code to define and export the Employee class

class Employee {
    
    constructor(name, email, id) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
  }


  // const employee = new Employee();
  module.exports = Employee;






// ====mc=====
// class Employee {
//     constructor(role){
//         console.log(`role from Employee class: ${role}`);
//     }
//     getRole(role) {
//             return role;
//     }
    
// }
   
// module.exports = Employee;