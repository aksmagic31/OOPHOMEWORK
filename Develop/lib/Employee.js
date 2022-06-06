// this is the main class employee

class Employee {
    
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // this is for getting attributes for employees, works for sub class too
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

}

module.exports = Employee;
