//sort employee by type and create objects with info
function sortEmployees(array){
    for (var i = 0; i<array.length; i++)
{
    if (array[i].officeNum){
            var person = {
            name: array[i].name,
            empID: array[i].empID,
            email: array[i].email,
            officeNum: array[i].officeNum
        }
           displayManager(person);

    }

    if (array[i].github){
           var engPerson = {
            name: array[i].name,
            empID: array[i].empID,
            email: array[i].email,
            github: array[i].github
        }
 
        displayEngineer(engPerson);
    }
    
    if (array[i].school){
        
        var internPerson = {
            name: array[i].name,
            empID: array[i].empID,
            email: array[i].email,
            school: array[i].school
        }
        displayIntern(internPerson);

    }
}
}

////////////

var html = [];

function displayManager(person){
    html.push(` 

    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Team Manager
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${person.name}</li>
    <li class="list-group-item">${person.empID} in</li>
    <li class="list-group-item">${person.email}</li>
    <li class="list-group-item">${person.officeNum}</li>
  </ul>
</div>`);
}

function displayEngineer(engPerson){
    html.push(`
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engPerson.name}</li>
    <li class="list-group-item">${engPerson.empID} in</li>
    <li class="list-group-item">${engPerson.email}</li>
    <li class="list-group-item">${engPerson.github}</li>
  </ul>
</div>
    
    `);
    
}

function displayIntern(internPerson){
    html.push(`
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${internPerson.name}</li>
    <li class="list-group-item">${internPerson.empID} in</li>
    <li class="list-group-item">${internPerson.email}</li>
    <li class="list-group-item">${internPerson.github}</li>
  </ul>
</div>
    
    `);
    
}

/////////////////
function htmlJoin(){
    var htmlJoin = html.join('');
    return htmlJoin;
}


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
     <link rel="stylesheet" href="./utils/app.css">
</head>
<body>
<header>
  <div class="container-fluid">
        <div class="row">
            <div class="jumbotron mb-3 team-heading">
                <h1>My Team</h1>
            </div>
        </div>
    </div>


</header>
<main>
  <div class="container">
  <div class="row" >
    ${htmlJoin()}
  </div>
  
</div>
</main>


    
 
 


 <script src="./utils.generateHTML.js"></script>
</body>
</html>
    `;
}

module.exports = generateHTML;