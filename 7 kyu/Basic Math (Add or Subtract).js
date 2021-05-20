/* Basic Math (Add or Subtract) */

/* In this kata, you will do addition and subtraction on a given string. The return value must be also a string. Note: the input will not be empty. */

function calculate(str) {
  return str.replace(/plus/g, "+").replace(/minus/g, "-").match(/[+\-]?([0-9\.]+)/g).reduce( (a,c) => Number(a) + Number(c) ).toString()
}