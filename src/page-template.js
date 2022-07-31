function generateHTML() {
  // const office = team[0].office;
  // const{name, ID, email, office}= team[0];
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

    <section ID="cards" class="d-flex flex-wrap justify-content-around align-items-center">
  ${dynHTML}
    </section>
    </body>
    </html>`;
}

// function dynHTML(team) {
//   for (let i = 0; i < team.length; i++) {
//     let name = team[0].name;
//     let ID = team[0].ID;
//     let email = team[0].email;
//     return `<div class="card">
// <div class="card-top">
// <h2>Manager:  ${name}</h2>
// </div>
// <div class="card-body">
//   <h3 class="card-ID">ID: ${ID}</h3>
//   <a  href="mailto: ${email}">Email: ${email}</a>
//   <h3 class="card-office">Office Number:  </h3>
// </div>
// </div>`;
//   }
// }

module.exports = generateHTML;
