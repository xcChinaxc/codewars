/* pick a set of first elements */
/* Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
If n == 0 return an empty sequence [] */

// P - array
// R - filter array
// E - arr = ['a', 'b', 'c', 'd', 'e']; first(arr) //=> ['a']; first(arr, 2) //=> ['a', 'b']
// P - filtered array

function first(arr, n=1) {
    return arr.filter( (l, i) => i <= n-1 )
  }