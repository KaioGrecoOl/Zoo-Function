const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(index) {
  return species.filter((animal) => index.includes(animal.id));
};

function getName(index) {
  return getSpecies(index).map((animal) => animal.name);
}

function getLocation(index) {
  return getSpecies(index).map((animal) => animal.location);
}

function employeeI(index) {
  const emplo = employees.find((name) => name.firstName === index.name
  || name.lastName === index.name || name.id === index.id);
  if (!emplo) {
    throw new Error('Informações inválidas');
  }
  const { firstName, lastName, responsibleFor, id } = emplo;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getName(responsibleFor),
    locations: getLocation(responsibleFor),
  };
}

function getEmployeesCoverage(index) {
  if (!index) {
    return employees.map((name) => employeeI({ id: name.id }));
  }

  return employeeI(index);
}
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
