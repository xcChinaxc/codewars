/* Filling an array (part 1) */

/* We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it. */

const arr = N => Array.from({length: N}, (v,i) => i)