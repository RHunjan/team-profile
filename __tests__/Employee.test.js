const Employee = require('../lib/Employee');

//test for creating an employee class - name, empID and email

test('test to make a new employee based on an object', ()=>{

 const e = new Employee();
 expect(typeof e).toBe("object");

});

test("Can set name via constructor arguments", () => {
  const name = "Reena";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testID = 8509;
  const e = new Employee("Reena", testID);
  expect(e.empID).toBe(testID);
});

test("set email via constructor argument", () => {
    const testEmail = 'Reena@email.com';
    const e = new Employee("reena", "8509", testEmail);
    expect(e.email).toBe(testEmail);
});

test('see if Employee returns getRole as Employee', () => {
    const e = new Employee("Reena", '8509', 'reena@email.com');
    expect(e.getRole()).toBe("Employee");
});


