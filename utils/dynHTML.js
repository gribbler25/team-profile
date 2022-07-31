function dynHTML(team) {
  let HTML = "";
  for (let i = 0; i < team.length; i++) {
    let title = team[i].title;
    let name = team[i].name;
    let ID = team[i].ID;
    let email = team[i].email;
    HTML += `<div class="card">
  <div class="card-top">
  <h2> ${title}: ${name}</h2> 
  </div>
  <div class="card-body">
    <h3 class="card-ID">ID: ${ID}</h3>

    Email: <a  href="mailto:${email}">${email}</a>

    <h3 class="card-variable">  </h3>
  </div>
  </div>`;
  }
  return HTML;
}
module.exports = dynHTML;
