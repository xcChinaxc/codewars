/* Reversed sequence  */
/* Build a function that returns an array of integers from n to 1 where n>0. */

const reverseSeq = n => {
  return Array.from( {length: n}, (_,n) => n+1).reverse()
};