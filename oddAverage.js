/**
 * fucntion takes an array as a paremeter
 * returns the average of the odd numbers in the array
 */

/**
 * Put odd numbers in an array
 */

function oddAverage(numbers) {
  // odds is the array that only contains the odd numbers from the function parameter array.
  const odds = [];
  for(const number of numbers) {
    if(number % 2 === 1) {
      odds.push(number);
    }
  }
  
  let sum = 0;
  for(const number of odds) {
    sum += number;
  }

  const count = odds.length;
  const avg = sum / count;

  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);