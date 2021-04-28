/* Evens times last */

/* Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0. If the sequence is empty, you should return 0. */

// P - integers
// R - sum of even integers multiplied by integer in the last index
// E - evenLast([2, 3, 4, 5]), 30
// P - filter out even numbers, reduce to get the sum, multiply by last integer

function evenLast(numbers) {
    return numbers.filter( (x,index)=>index%2===0 ).reduce( (a,c)=>a+c, 0) * numbers[numbers.length-1] || 0
}