const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


//test to see if we can make a new Intern object

test('creates an Intern object by extending Employee', () => {

       var intern = new Intern ('Janice Smith', '45785', 'reena@yahoo.com','McGill');
       
       expect(intern.school).toEqual('McGill');
        });