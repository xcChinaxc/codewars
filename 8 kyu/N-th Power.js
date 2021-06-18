/* N-th Power

This kata is from check py.checkio.org. You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
*/

// Attempt One
function index(array, n){
  if(array.length > n){
    return Math.pow(array[n], n)
  } else {
    return -1
  }
}