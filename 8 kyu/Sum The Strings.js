/* Sum The Strings */

/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string): */

// P - two nums as strings
// R - sum of two nums as strings
// E - sumStr("4", "5")
// P - make strings numbers, add numbers, make string again

function sumStr(a,b) {
  return String(Number(a) + Number(b))
}