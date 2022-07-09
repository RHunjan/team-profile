const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your name'
        }
    
    
    ]);
};

promptUser()
.then(answers => {
    const hTML = generateHTML(answers);
    console.log(hTML);

    fs.writeFile('./index.html', hTML, err =>{
        if (err) throw new Error(err);
    })



})