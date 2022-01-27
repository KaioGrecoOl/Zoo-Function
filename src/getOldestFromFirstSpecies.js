const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((name) => name.id === id).responsibleFor[0];
  const index = species.find((name) => name.id === firstAnimal).residents;
  const order = index.sort((a, b) => b.age - a.age)[0];
  return [order.name, order.sex, order.age];
}
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = getOldestFromFirstSpecies;
