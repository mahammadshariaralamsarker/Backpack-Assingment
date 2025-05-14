const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2015 },
  { make: 'Honda', model: 'Civic', year: 2012 },
  { make: 'BMW', model: 'X5', year: 2018 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

console.log(sortCarsByYear(cars));

// Output:
// [
//   { make: 'Honda', model: 'Civic', year: 2012 },
//   { make: 'Toyota', model: 'Corolla', year: 2015 },
//   { make: 'BMW', model: 'X5', year: 2018 }
// ]
