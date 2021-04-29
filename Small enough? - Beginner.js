/* Small enough? - Beginner */
/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

// P - array and integer
// R - true or false
// E - smallEnough([66, 101], 200), true
// P -  use every function

function smallEnough(a, limit){
  return a.every(x => x <= limit)
}