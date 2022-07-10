const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const test = require('./lib/Manager.js');

//List of questions to ask user initially
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter team manager name'
        }, {
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
            message: 'Enter Office Number' 
        },
        {
            type: 'list',
            name: 'addToTeam',
            message: 'Add a member to your team' ,
            choices: ['Engineer', 'Intern', 'I have finished building my team']
        },
        {
            type: 'input',
            name: 'EngName',
            message: 'Enter Engineer Name',
            when(answers) {
                return answers.addToTeam === 'Engineer'
                }
         }, {
            type: 'input',
            name: 'EngID',
            message: 'Enter Engineer EmployeeID',
            when(answers) {
                return answers.addToTeam === 'Engineer'
                }
         }, {
            type: 'input',
            name: 'EngEmail',
            message: 'Enter Engineer Email',
            when(answers) {
                return answers.addToTeam === 'Engineer'
                }
         },
         {
            type: 'input',
            name: 'EngGit',
            message: 'Enter Engineer Github User Name',
            when(answers) {
                return answers.addToTeam === 'Engineer'
                }
         },
         {
            type: 'input',
            name: 'IntName',
            message: 'Enter Intern Name',
            when(answers) {
                return answers.addToTeam === 'Intern'
                }
         },
         {
            type: 'input',
            name: 'intID',
            message: 'Enter Intern ID',
            when(answers) {
                return answers.addToTeam === 'Intern'
                }
         },
          {
            type: 'input',
            name: 'intEmail',
            message: 'Enter Intern email address',
            when(answers) {
                return answers.addToTeam === 'Intern'
                }
         },
          {
            type: 'input',
            name: 'intSchool',
            message: 'Enter Intern School',
            when(answers) {
                return answers.addToTeam === 'Intern'
                }
         }
   
    ]);
};

//List of questions to ask users to add to their team

const addMembers = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'addToTeam',
            message: 'Add a member to your team' ,
            choices: ['Engineer', 'Intern', 'I have finished building my team']
        }

    ]);
}



promptUser()
.then(answers => {
   
    if (answers.addToTeam === 'Engineer'){
        console.log('Engie Baby')
    }  
    
    else if (answers.addToTeam === 'Intern'){
        console.log('baby Intern');
    }
    else if (answers.addToTeam === 'I have finished building my team'){
       
    const hTML = generateHTML(answers);
    console.log(hTML);

    fs.writeFile('./index.html', hTML, err =>{
        if (err) throw new Error(err);
    })
    }
   


})