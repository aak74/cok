export default {
  project(state) {
    return state.knowledges.projects[0];
  },

  areas(state) {
    return state.knowledges.projects[0].areas;
  },

  team(state) {
    const teamKnowledges = state.knowledges.projects[0].team.reduce((carry, area) => {
      carry.set(area.name, area.weight);
      return carry;
    }, new Map());

    return state.knowledges.projects[0].areas.reduce((carry, area) => {
      carry.push(teamKnowledges.has(area.name) ? teamKnowledges.get(area.name) : 0);
      return carry;
    }, []);
  },
};
