/**
 * 
 */


const wantMoney = ['Mike', 'John', 'Smith', 'Mike', 'John', 'Phillip', 'Liam', 'Smith'];

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];


function noDuplicate(array) {
  const unique = [];
  for(const element of array) {
    if(unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(wantMoney);
console.log(uniqueArray);