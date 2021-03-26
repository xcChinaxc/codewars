/* Is there a vowel in there? */

function isVow(a){
  return a.map(num => 'aeiou'.includes(String.fromCharCode(num))? String.fromCharCode(num) : num )
}