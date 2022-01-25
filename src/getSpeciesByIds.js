const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specieId) => ids.includes(specieId.id));
}

module.exports = getSpeciesByIds;
