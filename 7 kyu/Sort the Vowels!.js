/* Sort the Vowels!

In this kata, we want to sort the vowels in a special format.
Task

Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|
*/

function sortVowels(s){
  if(typeof s == "string"){
    return s.split('').map( (letter, index) => {
      if('aeiou'.includes(letter.toLowerCase())){
        return `|${letter}`
        } else{ 
            return `${letter}|`
        }}).join('\n')
    } else {
    return ''
  }
}