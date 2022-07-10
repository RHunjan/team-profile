const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, empID, email, github) {
        super(name, empID, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
}
 
module.exports = Engineer;