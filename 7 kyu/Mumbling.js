/* Mumbling

This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  const sArr = s.toLowerCase().split(""),
      result = []
  sArr.forEach( (letter,i) => {
    letter = letter.repeat(i+1)
    result.push(letter[0].toUpperCase() + letter.slice(1))
  })
  return result.join('-')
}