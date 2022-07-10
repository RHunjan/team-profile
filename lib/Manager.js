const Employee = require('./Employee');

//Manager should have a name, employee ID, email address and office number

class Manager extends Employee {
    constructor(name, empID, email, officeNum) {
        super(name, empID, email);
            this.officeNum = officeNum;
            }

    getOfficeNum(){
    return this.officeNum;
}
}



var testManager  = new Manager('s','c','4', 'd');
console.log(testManager);
 
 
module.exports = Manager;