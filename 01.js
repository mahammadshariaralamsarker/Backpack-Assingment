const people = [
  { name: 'Shariar', age: 25, gender: 'male' },
  { name: 'Asha', age: 22, gender: 'female' },
  { name: 'Naim', age: 30, gender: 'male' },
  { name: 'Tania', age: 27, gender: 'female' }
];

function getMaleNames(people) {
  return people
    .filter(person => person.gender === 'male')
    .map(person => person.name);
}

console.log(getMaleNames(people)); 

// Output: [ 'Shariar', 'Naim' ]
