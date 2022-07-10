const Employee = require('../lib/Employee');

//test for creating an employee class - name, empID and email

test('test to make a new employee based on an object', ()=>{

    var employee = {
        name: 'Sally Smith',
        empID: '123465',
        email: 'email@email.com'
    }

    expect(employee.name).toBe('Sally Smith');
    expect(employee.empID).toBe('123465');
    expect(employee.email).toBe('email@email.com');

});