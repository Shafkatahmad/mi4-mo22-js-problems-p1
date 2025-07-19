/**
 * const Math = {
 *      min: function min(num1, num2) {
 *          let min = 0;
 *          for(num of num) {
 *              if(num1 < num2) {
 *                  min = num1;
 *              }
 *              else {
 *                min = num2;  
 *              }
 *          }
 *      }
 * }
 */

const min = Math.min(45, 21, 65, 99, 126, 5, -99);
console.log(min);

const max = Math.max(45, 21, 65, 99, 126, 5, -99, 987);
console.log(max);

console.log(Math.PI);
console.log(Math.abs(5-10));
console.log(Math.round(2.25));
console.log(Math.round(2.85));
console.log(Math.floor(2.85));
console.log(Math.ceil(2.25));

console.log(Math.random());
console.log(Math.random()*20);

const rand = Math.round(Math.random()*10);
console.log(rand);