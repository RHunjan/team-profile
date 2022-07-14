const Employee = require('./Employee');

//Manager have a name, employee ID, email address and office number

class Manager extends Employee {
    constructor(name, empID, email, officeNum) {
        super(name, empID, email);
            this.officeNum = officeNum;
            }

    getOfficeNum(){
    return this.officeNum;
}
    getRole(){
        return 'Manager';
    }

}



 
 
module.exports = Manager;