/* Sum of all the multiples of 3 or 5 */

/* Your task is to write function findSum.
Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:
findSum(5) should return 8 (3 + 5)
findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) */

// P - num
// R - num
// E - if 5, then return 8 because 3 + 5 = 8
// P - turn it an array, generate multiples of 3 and 5 up to and including our input, then i'll use the reduce function to get the sum

function findSum(n) {
  return Array.from( {length: n}, (_,i) => i+1).filter( num => num % 3 === 0 || num % 5 === 0 ).reduce( (a,c) => a+c)
}