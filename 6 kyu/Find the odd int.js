/* Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples:
- [7] should return 7, because it occurs 1 time (which is odd).
- [0] should return 0, because it occurs 1 time (which is odd).
- [1,1,2] should return 2, because it occurs 1 time (which is odd).
*/

function findOdd(A) {
  let numCount = {}
  for(let num of A){
    numCount[num] = numCount[num] + 1 || 1
  }
  
  for(let prop in numCount) {
    if(numCount[prop] % 2 != 0) return Number(prop);
  }
}