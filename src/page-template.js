function generateHTML(data) {
  //this may be a method on the Team object??
  return `<!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <title>Team Profiles</title>
      <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    <header class="head text-center">
           My Team
    </header>

    <section class="d-flex flex-wrap justify-content-around align-items-center">
    <div class="card">
  <div class="card-top">
  <h2>Manager:  ${data.name}</h2> 
  </div>
  <div class="card-body">
    <h3 class="card-ID">ID: ${data.ID}</h3>
    <a  href="mailto: ${data.email}">Email: ${data.email}</a>
    <h3 class="card-office">Office Number:  ${data.office}</h3>
  </div>
</div>
    </section>
    </body>
    </html>`;
  // if(${data.addEmployee}){
  //   for(let i=0;i<empArray.length;i++){
  //     empArray[i].name
  //     empArray[i].ID
  //     empArray[i].email
  //   }
  // }
}

module.exports = generateHTML;
