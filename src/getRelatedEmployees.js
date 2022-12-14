const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((maneg) => maneg.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const filterMana = data.employees.filter((idMana) => idMana.managers.includes(managerId));
    return filterMana.map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
  }
}
console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
module.exports = { isManager, getRelatedEmployees };
