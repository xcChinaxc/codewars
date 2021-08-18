/* String transformer

Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.
*/

function stringTransformer(str) {
  let reversedStr = str.split(' ').reverse().join(' ')
  return reversedStr.split('').map( x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase() ).join('')
}