/* Sum of positive */
/* You get an array of numbers, return the sum of all of the positives ones. */

function positiveSum(arr) {
  return (arr.filter( num => num > 0).length > 0) ? arr.filter( num => num > 0).reduce( (a,c) => a + c) : 0;
}