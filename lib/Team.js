class Team {
  // array of the members (manager, engineer, intern etc...) that will appear on the page?
  constructor(manager, engineer, intern) {
    (this.manager = manager),
      (this.engineer = engineer),
      (this.intern = intern);
  }
  initializeTeam() {
    const team = [];
    team.push(manager, engineer, intern);
    return team;
  }
}

// module.exports=Team
