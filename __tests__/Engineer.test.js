const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


//test to see if we can make a new Engineer object

test('creates an Engineer object by extending Employee', () => {

       var engineer = new Engineer('Janice Smith', '45785', 'reena@yahoo.com','Rhunjan');
       
       expect(engineer.github).toEqual('Rhunjan');
        });


    test('see if Engineer returns getRole() as Engineer', () => {
    const e = new Engineer("Reena", '8509', 'reena@email.com');
    expect(e.getRole()).toBe("Engineer");
});