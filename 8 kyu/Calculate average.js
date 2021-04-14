/* Calculate average */
/* Write a function which calculates the average of the numbers in a given list. */

function find_average(array) {
  return array.reduce( (a,c) => a+c ) / array.length;
}