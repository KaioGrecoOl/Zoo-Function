const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    let animalList = {};
    species.forEach((index) => { animalList[index.name] = index.residents.length; });
    return animalList;
  }
  const selectanil = species.find((index) => index.name === animal.specie);
  const sexAn = selectanil.residents.filter((index) => index.sex === animal.sex);
  if (animal.sex === undefined) {
    return selectanil.residents.length;
  } return sexAn.length;
}
console.log(countAnimals({ specie: 'elephants' }));

module.exports = countAnimals;
