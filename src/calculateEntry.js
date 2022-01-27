const data = require('../data/zoo_data');

const entrency = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const visitor = entrants.map((index) => index.age);
  const child = visitor.filter((inde) => inde < 18);
  const adult = visitor.filter((ind) => ind >= 18 && ind < 50);
  const senior = visitor.filter((inr) => inr >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

console.log(countEntrants(entrency));

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrance = countEntrants(entrants);
  const childPrice = entrance.child * 20.99;
  const adultPrice = entrance.adult * 49.99;
  const seniorPrice = entrance.senior * 24.99;
  return childPrice + adultPrice + seniorPrice;
}

console.log(calculateEntry(entrency));

module.exports = { calculateEntry, countEntrants };
