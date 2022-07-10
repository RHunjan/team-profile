//sort employee by type and create objects with info
function sortEmployees(array){
    for (var i = 0; i<array.length; i++)
{
    console.log(array[i]);
    if (array[i].officeNum){
        console.log('this is a manager');
        var person = {
            name: array[i].name,
            empID: array[i].empID,
            email: array[i].email,
            officeNum: array[i].officeNum
        }
        console.log(person);
        displayManager(person);

    }

    if (array[i].github){
        console.log('this is an engineer');
        var engPerson = {
            name: array[i].name,
            empID: array[i].empID,
            email: array[i].email,
            github: array[i].github
        }
        console.log(engPerson);
        displayEngineer(engPerson);
    }
    
    if (array[i].school){
        console.log('this is an intern');
    }
}
}

////////////

html = [];

function displayManager(person){
    html.push('a test');
    console.log(html);
   

}

function displayEngineer(engPerson){
    html.push('another test');
    console.log(html);

}


/////////////////

function generateHTML(array){
    sortEmployees(array);
 
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    
 <h1> test <h1>

${html};


 <script src="./utils.generateHTML.js"></script>
</body>
</html>
    `;
}

module.exports = generateHTML;