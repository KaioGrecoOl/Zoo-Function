const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const foundSpecies = data.species.find((element) => element.name === animal);
  return foundSpecies.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
