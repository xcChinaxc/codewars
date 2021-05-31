/* Powers of i */

/* i is the imaginary unit, it is defined by i² = -1, therefore it is a solution to x²+1=0.
Your task is to write a function pofi that returns i to the power of a given non-negative integer in its simplest form as a string (answer may contain i).  */

// P - integer
// R - string
// E - pofi(0), '1' and pofi(3), '-i'
// P - make array of solutions > return solution

function pofi(n) {
  let key = { 0: '1', 1: 'i', 2: '-1', 3: '-i' };
  return key[n % 4];
}
