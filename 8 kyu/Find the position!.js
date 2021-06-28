/* Find the position!

When provided with a letter, return its position in the alphabet.
- Input :: "a"
- Ouput :: "Position of alphabet: 1"   
*/

function position(letter){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}