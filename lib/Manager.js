const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        this.officeNumber = officeNumber;

        super(name, id, email);
    }

    getOfficeNumber() {
        this.officeNumber = officeNumber
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager