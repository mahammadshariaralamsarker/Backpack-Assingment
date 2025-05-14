const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

console.log(sumEvenNumbers(numbers)); 


// Output: 20
