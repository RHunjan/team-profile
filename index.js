//add team member classes
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');


const teamMembers = [];

//function to grab new Manager info

const addManager = ()=>{
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter team manager name'
    },
    {
        type: 'input',
        name: 'empID',
        message: 'Enter EmployeeID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Enter office number'
    }
]);    
};

// fuction to grab new Engineer info

const addEngineer = ()=>{
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Enter Engineer name'
        }, 
        {
        type: 'input',
        name: 'empID',
        message: 'Enter Engineer employeeID'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter Engineer email address'
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter Engineer Github address'
        }
      ])
    .then(answers =>{
        var newEngineer = new Engineer(answers.name, answers.empID, answers.email, answers.github);
        teamMembers.push(newEngineer);
        addNewTeamMember();
     }) 
 };

// function to grab new Intern info

const addIntern = ()=>{
    return inquirer.prompt([
         {
        type: 'input',
        name: 'name',
        message: 'Enter Intern name'
        },
        {
        type: 'input',
        name: 'empID',
        message: 'Enter Intern employeeID'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter Intern email'
        },
         {
        type: 'input',
        name: 'school',
        message: 'Enter Intern school'
        }
    ]).then(answers =>{
        var newIntern = new Intern(answers.name, answers.empID, answers.email, answers.school);
        teamMembers.push(newIntern);
        addNewTeamMember();
    }
    )
};

var addNewTeamMember = ()=>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addToTeam',
            message: 'Would you like to add more team members?',
            choices: ['Engineer', 'Intern', 'I am finished building my team']
        }
    ])
    .then(choice =>{
   
       if (choice.addToTeam === 'Engineer'){
        addEngineer();
       } 

       if (choice.addToTeam == 'Intern'){
        addIntern()
       }

       if (choice.addToTeam === 'I am finished building my team'){
        console.log(teamMembers);
        console.log(typeof teamMembers);
        console.log('You are done!');
        var page = generateHTML(teamMembers);
          fs.writeFile('./index.html', page, err => {
    if (err) throw new Error(err);
 
  })

       }
       
        })
   
    }; //end of addNewTeamMember

 

addManager()
.then(answers =>{
   var newManager = new Manager(answers.name, answers.empID, answers.email, answers.officeNum);
   teamMembers.push(newManager);
   addNewTeamMember();
})



