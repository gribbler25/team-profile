function dynHTML(team) {
  let HTML = "";
  for (let i = 0; i < team.length; i++) {
    let title = team[i].title;
    let name = team[i].name;
    let ID = team[i].ID;
    let email = team[i].email;
    let getVar = getVariable(team[i]);
    HTML += `<div class="card">
  <div class="card-top">
  <h2> ${title}: ${name}</h2> 
  </div>
  <div class="card-body">
    <h3 class="card-ID">ID: ${ID}</h3>

    Email: <a  href="mailto:${email}">${email}</a>

    <h3 class="card-variable"> ${getVar} </h3>
  </div>
  </div>`;
  }
  return HTML;
}

function getVariable(element) {
  switch (element.title) {
    case "Manager":
      return `Office # ${element.office}`;
    case "Intern":
      return `School: ${element.school}`;
    case "Engineer":
      return `<a href="github.com/${element.github}" target="_blank">GitHub</a>`;
  }
}

module.exports = dynHTML;
