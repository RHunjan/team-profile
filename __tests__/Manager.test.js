const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

//test to see if we can make a new Manager object

test('creates a Manager object by extending Employee', () => {

       var manager = new Manager('Janice Smith', '45785', 'reena@yahoo.com','12');
       
       expect(manager.officeNum).toEqual('12');
        })

        
  test('see if Manager returns getRole() as Manager', () => {
    const e = new Manager("Reena", '8509', 'reena@email.com');
    expect(e.getRole()).toBe("Manager");
});



    


 


