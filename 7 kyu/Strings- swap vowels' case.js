/* Strings: swap vowels' case

Special thanks to SteffenVogel_79 for the idea.

Challenge:
Given a string, return a copy of the string with the vowels' case swapped. For this kata, assume that vowels are in the set "aeouiAEOUI".
- Example: Given a string "C is alive!", your function should return "C Is AlIvE!"
- Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels. 
*/

function swapVowelCase(str) {
  let strArr = str.split(''),
      vowels = 'aeouiAEOUI',
      result = []
  
  strArr.forEach( (letter, i) => {
    let vowelIndex = vowels.indexOf(letter) // search vowels string for index of letter

    if(0 <= vowelIndex && vowelIndex < 5){ 
      result.push(letter.toUpperCase()) // capitalizes if letter is 'aeoui'
    } else if(5 <= vowelIndex){ 
      result.push(letter.toLowerCase()) // lowercases if letter is 'AEOUI'
    } else {
      result.push(letter)
    }
  })

  return result.join('')
}