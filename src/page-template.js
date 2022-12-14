const dynHTML = require("../utils/dynHTML");

function generateHTML(team) {
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
  ${dynHTML(team)}
    </section>
    </body>
    </html>`;
}

module.exports = generateHTML;
