/* Largest pair sum in array */
/* Given a sequence of numbers, find the largest pair sum in the sequence. */

// P - an array of integers
// R - integer
// E - [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// P - spread operator, math max, remove max, find max again

function largestPairSum(numbers)
{
  let max = Math.max(...numbers),
      removeMax = numbers.splice(numbers.indexOf(max),1),
      max2 = Math.max(...numbers)
  return max + max2
}

// After using the brute force method, I realized I could just sort and add the two top numbers. >.<

function largestPairSum(numbers)
{
  numbers.sort( (a,b) => b-a)
  return numbers[0] + numbers[1]
}