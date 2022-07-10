const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

//test to see if we can make a new employee object

test('test to see if we can create a new employee object', ()=>{

       var manager = {
        name: 'Sally Smith',
        empID: '123465',
        email: 'email@email.com',
        officeNum: '12'
    }

expect(manager.name).toBe('Sally Smith');
expect(manager.empID).toBe('123465');
expect(manager.email).toBe('email@email.com');
expect(manager.officeNum).toBe('12');

  
})


